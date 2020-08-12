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

import {najJaci, btnPobednikFunction, btnPrikazFunction} from './modulFunkcije.js'


console.log(najJaci(pokemoni));


btnPrikaz.addEventListener('click', btnPrikazFunction);
btnPobednik.addEventListener('click', btnPobednikFunction)

