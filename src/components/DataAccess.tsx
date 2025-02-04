import { Link } from '@mui/material';
import * as React from 'react';

export default function DataAccess() {
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
            <h3 id="data-access">Data Access</h3>
            <h2 id="data">Data</h2>
            <p><strong>Newest Record</strong> - the most recent record in JSON format<br />
                Ada - <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Ada">https://colabprod01.pace.edu/api/influx/sensordata/Ada</Link><br />
                Alan - <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Alan">https://colabprod01.pace.edu/api/influx/sensordata/Alan</Link><br />
                Odin - <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Odin">https://colabprod01.pace.edu/api/influx/sensordata/Odin</Link><br /></p>

            <p><strong>Newest 7 Days</strong> - records for the last 7 days in JSON format<br />
                Ada - <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Ada/delta?days=7">https://colabprod01.pace.edu/api/influx/sensordata/Ada/delta?days=7</Link><br />
                Alan - <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Alan/delta?days=7">https://colabprod01.pace.edu/api/influx/sensordata/Alan/delta?days=7</Link><br />
                Odin- <Link href="https://colabprod01.pace.edu/api/influx/sensordata/Odin/delta?days=7">https://colabprod01.pace.edu/api/influx/sensordata/Odin/delta?days=7</Link></p>

            <h2 id="infrastructure">Infrastructure</h2>

            <p><strong>Stations</strong> - List of data collection stations<br />
                <Link href="https://colabprod01.pace.edu/api/v2/stations/">https://colabprod01.pace.edu/api/v2/stations/</Link></p>

            <p><strong>Deployments</strong> - All listed deployments (periods of time stations collect data)<br />
                <Link href="https://colabprod01.pace.edu/api/v2/deployments/">https://colabprod01.pace.edu/api/v2/deployments/</Link></p>

            <p><strong>Active Deployments</strong> - Deployments currently on and collecting data<br />
                <Link href="https://colabprod01.pace.edu/api/v2/deployments/active">https://colabprod01.pace.edu/api/v2/deployments/active</Link></p>

            <p><strong>Sensors</strong> - List of all sensors<br />
                <Link href="https://colabprod01.pace.edu/api/v2/sensors/">https://colabprod01.pace.edu/api/v2/sensors/</Link></p>

            <p><strong>Sensor Packages</strong> - Lists of sensors currently installed on a given station<br />
                (note: the Deployment number in each record corresponds to a station ID. See Stations above.)<br />
                <Link href="https://colabprod01.pace.edu/api/v2/sensorpkgs/">https://colabprod01.pace.edu/api/v2/sensorpkgs/</Link></p>
        </div>
    </div>

}
