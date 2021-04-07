// object

// let houseKeeper = {
//     name: 'john',
//     age: 27,
//     experienceYear: 2,
//     address: 'kathmandu',
//     workedAt: ['solti','shangrila','everest']
// };

// console.log(houseKeeper.workedAt);

// constructor function
function HouseKeeper2 (name,age,experienceYear,workedAt){
    this.name = name;
    this.age = age;
    this.experienceYear = experienceYear;
    this.workedAt = workedAt; 
}
let house = new HouseKeeper2('nelson',23,2,['a','b','c']);
console.log(house);