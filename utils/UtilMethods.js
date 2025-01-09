// Support function
// Service function - Utility function


// 4 : argument
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

function sortMinToMax(array) {
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

function sortMaxToMin(array) {
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


// Common JS module
module.exports = {isEventNumber, isOddNumber, findMaxNumber, findMinNumber, sortMinToMax, sortMaxToMin};