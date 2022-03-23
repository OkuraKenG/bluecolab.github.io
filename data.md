### Data Access

## Data
**Newest Record** - the most recent record in JSON format<br>
(note: the number at the end of the URL corresponds to the deployment ID. See Deployments below.)<br>
Ada - https://colabprod01.pace.edu/api/v1/homelab/12/<br>
Odin - https://colabprod01.pace.edu/api/v1/homelab/13/<br>
HomeLab - https://colabprod01.pace.edu/api/v1/homelab/10/

**Newest 7 Days** - records for the last 7 days in JSON format<br>
(note: the number in the URL to the right of "week/" corresponds to the Station ID. See Stations below.)<br>
Ada - https://colabprod01.pace.edu/api/v1/week/7/0/0/<br>
Odin- https://colabprod01.pace.edu/api/v1/week/9/0/0/<br>
HomeLab- https://colabprod01.pace.edu/api/v1/week/8/0/0/

**All Records** - all records in JSON format as a downloadable file<br>
(note: the number in the URL to the right of "download/" corresponds to the Station ID. See Stations below.)<br>
Ada - https://colabprod01.pace.edu/api/v1/download/7/0/0<br>
Odin - https://colabprod01.pace.edu/api/v1/download/9/0/0<br>
HomeLab - https://colabprod01.pace.edu/api/v1/download/8/0/0


## Infrastructure

**Stations** - List of data collection stations<br>
https://colabprod01.pace.edu/api/v1/pods/

**Deployments** - All listed deployments (periods of time stations collect data)<br>
https://colabprod01.pace.edu/api/v1/deps/

**Active Deployments** - Deployments currently on and collecting data<br>
https://colabprod01.pace.edu/api/v1/activeDeps/

**Sensors** - List of all sensors<br>
https://colabprod01.pace.edu/api/v1/sensors/

**Sensor Packages** - Lists of sensors currently installed on a given station<br>
(note: the number at the end of the URL corresponds to the station ID. See Stations above.)<br>
Ada - https://colabprod01.pace.edu/api/v1/sensorPkg/7/<br>
HomeLab - https://colabprod01.pace.edu/api/v1/sensorPkg/8/<br>
Odin - https://colabprod01.pace.edu/api/v1/sensorPkg/9/