let a = 96;
let b = 108;
let c = 89;
let d = a + b + c;
let averageDolphin = Math.floor(d/3);

let e = 88;
let f = 91;
let g = 110;
let h = e + f + g;
let averageKoala = Math.floor(h/3);

if (averageDolphin == averageKoala || averageKoala== averageDolphin){
    console.log('It is a draw');
} else if (averageDolphin > averageKoala){
    console.log('Dolphin is the winner');
} else {
    console.log('Koala is the winner');
}





