// DRY : Dont repeat yourself
// Single Responsibility : Tính đơn nhiệm
// Clean Code 

// function name : 
// calmeCase
// Declaration

// Method 01 : (Function Declaration) method | HOISTING
let userInputNum = getUserInputNum();
let inputNumber = converToNumber(userInputNum);
evaluateEvenOrOddNumber(inputNumber);

function getUserInputNum(){

    let inputNum = Number(readline.question('Your num: '));
    return inputNum;
}

function converToNumber(str) {
    return Number(str);
}

function evaluateEvenOrOddNumber(num) { 
}

let returnValue = functionName();
function functionName() {
    return 1; 
}


// Method 02 : (Function Expression) method | NO hoisting 
const addNumber = function (firstNum , secondNum){
    return firstNum + secondNum;
}

let sum = addNumber (1, 2);