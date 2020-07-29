// /Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function maxNumber(a, b, c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else{
        return c;
    }
}
console.log(maxNumber(15, 22, 14));


//Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPicePoCmKvadratnom(r, cenaPice) {
    let P = Math.pow(r, 2) * Math.PI;
    console.log(`cena pice po kvadratnom centimetru je ${cenaPice/P}`);
}
cenaPicePoCmKvadratnom(5, 850);