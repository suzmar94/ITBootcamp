//Написати функцију која исписује све елементе низа који су дељиви са 5

function printDivisibleBy5(niz) {
   for(let i = 0; i<niz.length; i++){
       if(niz[i]%5===0){
        console.log(niz[i]);
       }
   }
}
let niz = [1,2,3,4,5,10,15,23,1,5];
let noviNiz = [];
noviNiz = niz.filter(e => e%5===0);
console.log(noviNiz);

// printDivisibleBy5(niz);








//Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
//Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)


function lifePizzaSupply(numPerMonth,age){
    let limitAge = 100;
    return (limitAge - age) * 12 * numPerMonth; //vraca
}


console.log(lifePizzaSupply(10,26));


