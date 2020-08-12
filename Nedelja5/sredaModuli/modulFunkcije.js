function sposobnostiPokemona(pokemoni) {
    let niz = [];
    pokemoni.forEach(element => {
    niz.push(element.sposobnosti);
});
   return niz.flat();
}


function najJaci(pokemoni) {           
    let najjaci = pokemoni[0];
      pokemoni.forEach(el => {
  
          if (najjaci.karakteristike.napad < el.karakteristike.napad) 
          najjaci = el;
      });
      return najjaci;
  }
  

function btnPobednikFunction (element){  
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
};


  
function btnPrikazFunction (element){       
    pokemoni.forEach(element => {
        let p = document.createElement('p');     
        p.textContent =
        `ime: ${element.ime};
        vrsta: ${element.vrsta};
        sposobnosti: ${element.sposobnosti};
        karakteristike:
            napad:${element.karakteristike.napad};
            odbrana: ${element.karakteristike.odbrana};
            brzina: ${element.karakteristike.brzina};`

    wrapper.appendChild(p);                        

        let image = document.createElement('img');
        image.src = element.slika;
        image.className = "slika";

    wrapper.appendChild(image);                   

    });
}

export {btnPrikazFunction, btnPobednikFunction, najJaci, sposobnostiPokemona}
