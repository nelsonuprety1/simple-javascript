// from book js and jquert

let scores = [24,32,17];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = '';
let i;

// loop through the items in the array
for(i = 0; i < arrayLength; i++){
    // arrays are zero based (so 0 is round 1)
    // add 1 to the current round
    roundNumber = (i + 1);

    // write the current round to message
    msg += 'Round' + roundNumber + ': ';

    // get the score from the scores array
    msg += scores[i];

    console.log(msg);
}