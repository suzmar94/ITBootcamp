// zadatak1.js:
// За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)

let a = 40, b = 50;
    console.log(a+b, a-b, a*b, a/b, a%b, a^b);


// zadatak2.js - Продавница
// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
{
    let cena = 550, novcanik = 720;
    if(novcanik<cena){

        console.log("Nemate dovoljno novca")
        console.log('Trenutno stanje je: ' + novcanik)
    } else{

        console.log("Uspesno ste kupili proizvod")
        console.log('Trenutno stanje je: ' + (novcanik-=cena))
    }
}

// zadatak3.js
// Направити променљиву која има вредност неког броја (цео број)
// Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
// Ако није, Број _ није дељив са 3
{
    let b = 349
    if(b % 3 ===0){
        console.log(`Број ${b} је дељив са 3`)
    }else{
        console.log(`Број ${b} nije дељив са 3`)
    }
}

// zadatak4.js
// Исписати првих 1000 бројева дељивих са 5

{

    for( let prvi = 0,zadnji = 5000;prvi <= zadnji; prvi+=5){
        if(prvi % 5 === 0){
            console.log(`${prvi}`)
        }
    }
}

    // for (let brojDeljivih = 1000, i=0; brojDeljivih >0; brojDeljivih--) {
    //   console.log(i+=5);
    // }
