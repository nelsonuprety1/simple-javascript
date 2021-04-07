// tip calculator with loops

let bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];

function calcTip(billValue){
    if(billValue >= 50 && billValue <= 300 ){
       billValue = 0.15 * billValue;
    }else {
        billValue = 0.2 * billValue;
    }
    return billValue;
}

for(let i = 0; i< bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));