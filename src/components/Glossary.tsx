import { Link } from '@mui/material';
import * as React from 'react';

export default function Glossary() {
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
            <h3 id="glossary-of-terms">Glossary of Terms</h3>

            <p><strong>Buoy</strong> – A floating object that can be anchored in position. Buoys can support hardware.</p>

            <p><strong>Data Logger</strong> - Also known as Measurement and Control System or Micrologger. Data loggers are the brain of a data acquisition system. They make measurements at a specified scan rate, process data, and initiate telecommunications. (Campbell Scientific)</p>

            <p><strong>Deployment</strong> (noun) – The time period in which a station collects a defined set of parameters continuously at a fixed location.</p>

            <p><strong>Deployment</strong> (verb) – The act of deploying a station. (See Deployment (n).)</p>

            <p><strong>Maintenance Deployment</strong> (verb) – The redeployment of an existing station due to maintenance.</p>

            <p><strong>New Deployment</strong> (verb) – The deployment of a new station.</p>

            <p><strong>Platform Deployment</strong> (verb) – The redeployment of a station with a new platform.</p>

            <p><strong>GPS</strong> (Global Positioning System) - A satellite system used to determine geographic position and deviation. Campbell Scientific data loggers can interrogate some GPS receivers then store the GPS position data. (Campbell Scientific)</p>

            <p><strong>Incident</strong> – An unexpected event affecting data integrity and/or a deployed platform for a given time period.</p>

            <p><strong>Mission</strong> – The useful life cycle of a station. A mission is made up of one or more deployments.</p>

            <p><strong>Modem</strong> – A device whose name combines the term “modulate” with “demodulate,” which refers to its ability to transmit and receive data superimposed on a carrier frequency. In our usage, a modem also: 1) has the ability to raise the data logger’s ring line or be used with the SC32A to raise the ring line and put the data logger in the Telecommunications Command State and 2) has an asynchronous serial communication port that can be configured to communicate with the data logger. (Campbell Scientific)</p>

            <p><strong>Platform</strong> – A buoy with additional hardware bolted onto it.</p>

            <p><strong>Sensor</strong> - A device that responds to a physical stimulus and transmits a signal or changes electrical property such as resistance. (Campbell Scientific)</p>

            <p><strong>Sonde</strong> - An instrument that obtains and transmits information about its surroundings from an inaccessible location, such as underground or underwater. (Dictionary, n.d.)</p>

            <p><strong>Station</strong> – A named data collection unit at fixed location. Stations can be commissioned and decommissioned.</p>

            <details><summary>References</summary>
                <p>
                    Campbell Scientific. (n.d.). Glossary: Words that are commonly used by Campbell Scientific. Retrieved from Campbell Scientific: <Link href="https://www.campbellsci.com/glossary" target="_blank">https://www.campbellsci.com/glossary</Link>


                    Dictionary, O. E. (n.d.). Retrieved from Oxford English Dictionary: <Link href="https://www.oed.com" target="_blank">https://www.oed.com</Link>
                </p>
            </details>
        </div>
    </div>
}
