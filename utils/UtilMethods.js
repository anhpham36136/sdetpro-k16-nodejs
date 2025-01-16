// Support function
// Service function - Utility function


// 4 : argument
const readline = require("readline-sync");
let isEvenNumber_ = isEventNumber(4);
// console.log(`Is even number : ${isEvenNumber_}`);


// number : parameter
function isEventNumber(number) {
    return number % 2 === 0;
}

function isOddNumber(number) {
    return number % 2 !== 0;
}


function findMaxNumber(array) {
    let isMaxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (isMaxNumber < array[i]) {
            isMaxNumber = array[i];
        }
    }
    return isMaxNumber;
}

function findMinNumber(array) {
    let isMinNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (isMinNumber > array[i]) {
            isMinNumber = array[i];
        }
    }
    return isMinNumber;
}

function sortArrayMinToMax(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) { // nếu số ờ vị trí i(trước) mà lớn hơn số ở vị trí j(sau)
                let min = array[j]; // giữ lại số nhỏ
                array[j] = array[i]; // đẩy số lớn hơn ra sau
                array[i] = min; // gắn số nhỏ vào vị trí phía trước

            }
        }
    }
    return array;
}

function sortArrayMaxToMin(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) { // nếu số ờ vị trí i(trước) mà nhỏ hơn số ở vị trí j(sau)
                let max = array[j]; // giữ lại số lớn
                array[j] = array[i]; // đẩy số nhỏ hơn ra sau
                array[i] = max; // gắn số lớn vào vị trí phía trước

            }
        }
    }
    return array;
}

function deleteElementFromArray(arr, i) {
    arr.splice(i, 1);
}

function sortNumberASC(num1, num2) {
    return num1 - num2;
}
function sortNumberDESC(num1, num2) {
    return num2 - num1;
}

function getUserInput() {
    return readline.question("Please input: ");
}
// Common JS module
module.exports = {
    isEventNumber,
    isOddNumber,
    findMaxNumber,
    findMinNumber,
    sortArrayMinToMax,
    sortArrayMaxToMin,
    deleteElementFromArray,
    sortNumberASC,
    sortNumberDESC,
    getUserInput
};