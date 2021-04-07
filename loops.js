// Looping Arrays, Breaking and Continuing

const nelson = [
    'Nelson',
    'Uprety',
    2021 - 1999,
    'student',
    ['Yujji','Fusiguro','Gojou'],
    true
];

// Empty array
const types = [];

// Array is 0 based so used 0
for(let i = 0; i < nelson.length; i++){
    // Reading from nelson array
    console.log(nelson[i], typeof nelson[i]);

    // Filling types array
    // create a new array which will contain this typeof of the each element typeof nelson[i]. new empty array is types=[]
    // read data from the typeof nelson[i] loop and construct a new array in types = [] . eg. in iteration(repetation) we will have types[0] = nelson[0]
    // this is one way of filling the array
// types[i] = typeof nelson[i];

    // This is another way of filling the array. we need to add new elements at the last and not in the beginning
types.push(typeof nelson[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
   ages.push(2021 - years[i]);
}

console.log(ages);


// continue and break
// continue is to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the loop

console.log('----Only Strings ----');
for(let i = 0; i < nelson.length; i++){
// if the type is not string then continue
    if(typeof nelson[i] !== 'string') continue;
    console.log(nelson[i], typeof nelson[i]);
}

console.log('----Break with number ----');
for(let i = 0; i < nelson.length; i++){
// if the type is not string then continue
    if(typeof nelson[i] === 'number') break;

    console.log(nelson[i], typeof nelson[i]);
}

