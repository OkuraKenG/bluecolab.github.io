import * as React from 'react';
import HomeBody from './components/HomeBody';
import DataAccess from './components/DataAccess';
import Glossary from './components/Glossary';
import { useState, useEffect } from 'react';

export default function App() {
	const [currentPage, setCurrentPage] = useState<"glossary" | "dataAccess" | "home">("home");

	const renderPage = () => {
		switch (currentPage) {
			case "home":
				return <HomeBody />;
			case "dataAccess":
				return <DataAccess />;
			case "glossary":
				return <Glossary />;
			default:
				return <HomeBody />;
		}
	};

	useEffect(() => {
		const handleHashChange = () => {
			// Get the hash value and remove the '#' part
			const hash = window.location.hash.substring(1); // Remove the '#' from the hash
			switch (hash) {
				case "home":
					setCurrentPage('home');
					break;
				case "dataAccess":
					setCurrentPage('dataAccess');
					break;
				case "glossary":
					setCurrentPage('glossary');
					break;
				default:
					setCurrentPage('home');
			}
		};

		// Listen to changes in the URL hash
		window.addEventListener("hashchange", handleHashChange);

		// Handle the initial hash on page load
		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<div>
			{
				renderPage()
			}
		</div>
	);
}
