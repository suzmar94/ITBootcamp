import { Launch } from "./LaunchIspis"
import { getPastLaunches } from "../service"

export const pastLaunchesIspis = () => {
    const launchList = document.createElement('div')
    launchList.className = 'launch-list'

    // getAllLaunches().then(res => {
    //     res.data.forEach(launch => {
    //         if(launch.launch_year == 2019) // Само за филтрирање
    //              launchList.appendChild(Launch(launch))
    //     })
    // })
    // setTimeout(() => {}, 1000)

    getPastLaunches().then(response=>{
        response.data.forEach(el => {
            launchList.appendChild(Launch(el))
        })
    })
    

    return launchList
}


// getPastLaunches().then(res => {
//     app.innerHTML = '';
//     app.appendChild(LaunchList(res.data))
// });