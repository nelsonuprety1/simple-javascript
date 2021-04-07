// Tip calculator   
let value = 430;
let tip1 = (15/100) * value;
let tip2 = (20/100) * value;

// if (value >= 50 && value <= 300){
//     console.log(`The amount is ${tip1}`);
// }else{
//     console.log(`The amount is ${value}`);
// }

// Declaring variables
let fifeteenTip = (`The bill was ${value}, the tip was ${tip1}, and the total value ${value + tip1}.`);
let twentyTip = (`The bill was ${value}, the tip was ${tip2}, and the total value ${value + tip2}.`);

// Using ternary operators
let bill = (value <= 300 && value >= 50 ) ?  (fifeteenTip) : (twentyTip);
console.log(bill); 

// if(value >= 50 && value <= 300 ){
//     console.log(a);
// } else{
//     console.log(b);
// }
