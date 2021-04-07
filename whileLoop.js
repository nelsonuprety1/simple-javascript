// while loop
// while loop doesnt require counter variable like let rep = 1
let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}

console.log();
