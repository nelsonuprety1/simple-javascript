//todays forecast in kelvin. the value wont be changed so const is used
const kelvin = 0;
const celsius = kelvin - 273; //converting kelvin to celsius
//calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round down
fahrenheit = Math.floor(fahrenheit);
console.log(`The tempereature is ${fahrenheit} degrees Fahrenheit.`);