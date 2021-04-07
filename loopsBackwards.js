// Loops backwards and loops inside loops

const nelson = [
    'Nelson',
    'Uprety',
    2021 - 1999,
    'student',
    ['Yujji','Fusiguro','Gojou'],
];

// 4,3,...,0

for(let i = nelson.length - 1; i >= 0; i--){
    console.log(i, nelson[i]);
}

// loops inside loop
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}