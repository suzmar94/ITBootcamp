import { pastLaunchesIspis } from './components/PastLaunches.js'
// import { getPastLaunches } from './service'
import { Header } from './components/header.js';
import { Select } from './components/select.js';

document.querySelector('#heder').appendChild(Header())

document.querySelector('#selekt').appendChild(Select);

document.querySelector('#app').appendChild(pastLaunchesIspis())


