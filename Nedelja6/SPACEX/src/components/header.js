import { getCompanyInfo } from "../service";


export const Header = () =>{
    const headerCompanyNameDiv = document.createElement('div');
    const headerCompanyName = document.createElement('p');

    getCompanyInfo().then(res =>{
        headerCompanyName.textContent = `Ime kompanije je: ${res.data.name}`;
        headerCompanyNameDiv.appendChild(headerCompanyName);
    })
    return headerCompanyNameDiv;
}
