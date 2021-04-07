//   Tip calculator
let tip1 = (15/100);
let tip2 = (20/100);


function calcTip(billValue){
    if(billValue >= 50 && billValue <= 300 ){
       billValue = 0.15 * billValue;
    }else {
        billValue = 0.2 * billValue;
    }
    return billValue;
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(bills, tips);
