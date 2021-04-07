let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
    return Math.floor(this.mass / this.height ** 2);
    }

}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.955,
    calcBMI: function(){
    return Math.floor(this.mass / this.height ** 2);
    }
}

if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark['fullName']} BMI ${mark.calcBMI()} is higher than ${john['fullName']} BMI ${john.calcBMI()}!`);
}else if (john.calcBMI() > mark.calcBMI()){
 console.log(`${john['fullName']} BMI ${john.calcBMI()} is higher than ${mark['fullName']} BMI ${mark.calcBMI()}!`);
}else{
    console.log(`They both have same BMI!`);
}

