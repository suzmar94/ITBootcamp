let wrapper = document.querySelector('.wrapper');
let btnPrikaz = document.querySelector('#prikaz');
let btnPobednik = document.querySelector('#pobednik');

let pokemon1 = {
    ime: 'Pidgeotto',
    vrsta: 'leteci',
    sposobnosti: ['bljuvanje leda', 'pozar'],
    karakteristike:{

        napad: 33,
        odbrana: 55,
        brzina: 56
    },
    slika: 'images/Pidgeotto.png'
}

let pokemon2 = {
    ime: 'Eevee',
    vrsta: 'vatreni',
    sposobnosti: ['bljuvanje strela', 'uragan'],
    karakteristike:{

        napad: 56,
        odbrana: 89,
        brzina: 56
    },
    slika: 'images/Eevee.jpg'


}
let pokemon3 ={
    ime: 'Charmander',
    vrsta: 'zemljani',
    sposobnosti: ['bljuvanje zemlje', 'zemljotres'],
    karakteristike:{

        napad: 98,
        odbrana: 78,
        brzina: 22
    },
    slika: 'images/Charmander.png'


}
let pokemon4 = {
    ime: 'Umbreon',
    vrsta: 'vodeni',
    sposobnosti: ['bljuvanje vode', 'vodeni mlaz'],
    karakteristike:{

        napad: 56,
        odbrana: 33,
        brzina: 66
    },
    slika: 'images/Umbreon.png'
    

}
let pokemoni = [pokemon1,pokemon2, pokemon3, pokemon4];

btnPrikaz.addEventListener('click', ()=>{        /////event za prikaz opisa pokemona
    pokemoni.forEach(element => {
        let p = document.createElement('p');     ////kreiram paragraf sa opisom pokemona
        p.textContent =
        `ime: ${element.ime};
        vrsta: ${element.vrsta};
        sposobnosti: ${element.sposobnosti};
        karakteristike:
            napad:${element.karakteristike.napad};
            odbrana: ${element.karakteristike.odbrana};
            brzina: ${element.karakteristike.brzina};`

    wrapper.appendChild(p);                        ////////dodajemo opis u wrapper div

        let image = document.createElement('img');
        image.src = element.slika;
        image.className = "slika";

    wrapper.appendChild(image);                   /////////dodajemo sliku odgovarajuceg pokemona u wrapper div

    });
})

//4.zadatak ujedno
function najJaci(pokemoni) {           //////////iz nekog razloga kad je funkcija iznad svega ne radi??????????whatever
  let najjaci = pokemoni[0];
    pokemoni.forEach(el => {

        if (najjaci.karakteristike.napad < el.karakteristike.napad) 
        najjaci = el;
    });
    return najjaci;
}
console.log(najJaci(pokemoni));


btnPobednik.addEventListener('click', (element)=>{  ////pravim event da mi izadje najjaci pokemon po funkciji vec napravljenoj
    let p = document.createElement('p');
    p.textContent = 
    `ime: ${najJaci(pokemoni).ime};
        vrsta: ${najJaci.vrsta};
        sposobnosti: ${najJaci(pokemoni).sposobnosti};
        karakteristike:
            napad:${najJaci(pokemoni).karakteristike.napad};
            odbrana: ${najJaci(pokemoni).karakteristike.odbrana};
            brzina: ${najJaci(pokemoni).karakteristike.brzina};`

    wrapper.appendChild(p);

    let image = document.createElement('img');
    image.src = najJaci(pokemoni).slika;
    
    wrapper.appendChild(image);
});