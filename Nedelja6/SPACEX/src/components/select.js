import { getPastLaunches } from "../service";
import { Launch } from "./LaunchIspis";

export const Select = document.createElement('select');

for (let i = 2006; i < 2021; i++) {
    let opcija = document.createElement('option');
    opcija.textContent = i;
    Select.appendChild(opcija);
};

Select.addEventListener('change', (e) => {
    e.preventDefault();

    const selectDiv = document.createElement('div');
    selectDiv.className = 'launch-list';
    selectDiv.innerHTML = '';

    getPastLaunches().then((res) => {

        res.data.forEach((element) => {

            if (Select.value == element.launch_year) {

                selectDiv.appendChild(Launch(element));
                document.getElementById('app1').appendChild(selectDiv);
            };
        });
        return selectDiv;
    });
});

// u html select
// na njemu eventlistener
// filtrirati po godinama