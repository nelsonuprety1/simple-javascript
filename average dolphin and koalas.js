// calculating average of both teams
let calcAverage = (a,b,c) => {
    return (a+b+c)/3;
}



function checkWinner(avgDolphins,avgKoalas){
    if(averageDolphin >= 2 * averageKoala){
        console.log(`Dolphins win ${averageDolphin} vs ${averageKoala}`);
    }else if (averageKoala >= 2 * averageDolphin){
        console.log(`Koalas win ${averageKoala} vs ${averageDolphin}`);
    }else{
        console.log("Nobody wins");
    }
return avgDolphins, avgKoalas;
}

let averageDolphin = calcAverage(44,23,71);
let averageKoala = calcAverage(65,54,49);
checkWinner(averageDolphin,averageKoala);




// function checkWinner(avgDolphins,avgKoalas) {
//     if(avgDolphins == 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolphins}) vs (${avgKoalas})`);
//     }else if(avgKoalas == 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas}) vs (${avgDolphins})`);
//     }else{
//         console.log("Nobody won");
//     } 
//     return avgDolphins, avgKoalas;
// }
// let averageDolphin = console.log(calcAverage(30,30,30));
// let averageKoala = console.log(calcAverage(13,13,13));

// checkWinner(averageDolphin,averageKoala);

// function checkWinner(avgDolphins,avgKoalas) {
//     if(avgDolphins == 2 * calcAverage){
//         console.log(`Dolphins win (${calcAverage()}) vs (${calcAverage()})`);
//     }else if (avgKoalas == 2 * calcAverage){
//         console.log(`Koalas win (${calcAverage()}) vs (${calcAverage()})`);
//     }else{
//         console.log("Nobody won");
//    } 
//    return avgDolphins, avgKoalas;
// }

// checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));