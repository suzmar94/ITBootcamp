// Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

// Даље, направити низ од ових објеката
// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона
// [<...>,...]
// Сортирати покемоне по брзини, растуће.

let pokemon1 = {
    ime: 'Pidgeotto',
    vrsta: 'leteci',
    sposobnosti: ['bljuvanje leda', 'pozar'],
    karakteristike:{

        napad: 33,
        odbrana: 55,
        brzina: 56
    }
}

let pokemon2 = {
    ime: 'Eevee',
    vrsta: 'vatreni',
    sposobnosti: ['bljuvanje strela', 'uragan'],
    karakteristike:{

        napad: 56,
        odbrana: 89,
        brzina: 56
    }

}
let pokemon3 ={
    ime: 'Charmander',
    vrsta: 'zemljani',
    sposobnosti: ['bljuvanje zemlje', 'zemljotres'],
    karakteristike:{

        napad: 98,
        odbrana: 78,
        brzina: 22
    }

}
let pokemon4 = {
    ime: 'Umbreon',
    vrsta: 'vodeni',
    sposobnosti: ['bljuvanje vode', 'vodeni mlaz'],
    karakteristike:{

        napad: 56,
        odbrana: 33,
        brzina: 66
    }

}
let pokemoni = [pokemon1,pokemon2, pokemon3, pokemon4];
console.log(pokemoni);

//////////////////////////////////////////////////////////////////////

function sposobnostiPokemona(pokemoni) {
    let niz = [];
    pokemoni.forEach(element => {
    niz.push(element.sposobnosti);
});
   return niz.flat();
}

console.log(sposobnostiPokemona(pokemoni));


///////////////////////////////////////////////////////////////////

pokemoni.sort((a, b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina
    
});

console.log("Pokemoni poredjani po brzini:");

let red = 1;
pokemoni.forEach(element => {
    console.log(red++," - ", element.ime, " , brzina=", element.karakteristike.brzina)
});

// 4.Направити функцију која прима низ покемона, пореди покемоне по јачини/napad и враћа као победника оног који има највећу јачину напада.


// function najJaci(pokemoni) {
//   let najjaci = pokemoni[0];
//     pokemoni.forEach(el => {

//         if (najjaci.karakteristike.napad < el.karakteristike.napad) 
//         najjaci = el;
//     });
//     return najjaci;
// }
// console.log(najJaci(pokemoni));


