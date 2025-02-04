import { Link } from '@mui/material';
import * as React from 'react';

const HomeBody: React.FC = () => {
	return <div>
		<div className='bg-gray-900 p-4 text-white'>
			<div className='text-5xl font-bold'>
				bluecolab.github.io
			</div>
			<div className='text-2xl'>
				GitHub Pages wiki with detail about Blue Colab
			</div>
		</div>

		<div className='p-4'>

			<div className='text-sm'>
				GitHub Pages wiki with details about Blue Colab resources
			</div>

			<div className='font-bold'>
				Blue CoLab Resources
			</div>

			<ul className="list-disc">

				<li className='text-sm'>
					<Link
						href="#glossary"
					>Glossary of Terms</Link>
				</li>

				<li className='text-sm'>
					<Link
						href="#dataAccess"
					>Data Access</Link>
				</li>
			</ul>
		</div>
	</div>
}
export default HomeBody;