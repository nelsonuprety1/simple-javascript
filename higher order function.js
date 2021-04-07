// Higher order functions

function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function division(first, second){
    return first / second;
}

// operator is a  function
function calculator(first, second, operator){
    return operator(first, second);
}

calculator(1,2,add);