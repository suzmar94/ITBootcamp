// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач

// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
// Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку


// broj naruzbina
let brojNarudzbina = 0;

////pravim dugmice za narucivanje
let orderDiv = document.getElementById("orderButtons");

let orderButton1 = document.createElement("button");
orderButton1.textContent = "Naruci!";

let orderButton2 = document.createElement("button");
orderButton2.textContent = "Naruci!";

orderDiv.append(orderButton1, orderButton2);


// napravi labelu za ispis trenutnog broja narudzbina

let ispisBrojaNarudzbinaLabel = document.createElement("label");
osveziIspisBrojaNarucenih();

// dodaj novu labelu u DOM

orderDiv.append(ispisBrojaNarudzbinaLabel);

///////////funkcije
function osveziIspisBrojaNarucenih() {
  ispisBrojaNarudzbinaLabel.innerHTML =
    "Broj narudzbina je: " + brojNarudzbina + "!";   ////br narudzbina je uvek nula jer je na pocetku tako definisano
}

function povecajBrojNarudzbina() {  //ov funkija povecava promenljivu broja narudzbina i vraca je osvezava broj  istih
  brojNarudzbina++;
  osveziIspisBrojaNarucenih();
}

////////////event listeneri
orderButton1.addEventListener("click", (e) => {
  povecajBrojNarudzbina();
});

orderButton2.addEventListener("click", (e) => {
  povecajBrojNarudzbina();
});


////pravim dugmice za narucivanje odmah
let orderNowDiv = document.getElementById("orderNowButtons");

let orderNowButton1 = document.createElement("button");
orderNowButton1.textContent = "Naruci odmah!";

let orderNowButton2 = document.createElement("button");
orderNowButton2.textContent = "Naruci odmah!";

orderNowDiv.append(orderNowButton1, orderNowButton2);


///////////////funkcija
function naruciOdmah() { ////dok je broj narudzbina(promenljiva gore definisana) veci od nule menjaj text label-a i rifresuj na nulu, ako je nula izbaci gresku
  if (brojNarudzbina > 0) {
    let datum = new Date();
    ispisBrojaNarudzbinaLabel.innerHTML =
      "Narucili ste " + brojNarudzbina + " pica. [" + datum + "]";
    brojNarudzbina = 0;
  } else {
    ispisBrojaNarudzbinaLabel.innerHTML =
    "Narudzbuna neuspela! Molimo vas dodajte neke artikle pre porudzbine!";
  }
}

/////////////event listeneri
orderNowButton1.addEventListener("click", (e) => {
  naruciOdmah();
});
orderNowButton2.addEventListener("click", (e) => {
  naruciOdmah();
});


