// . dot notation
// const UtilMethods = require('../../utils/UtilMethods');
// let isEvenNumber_ = UtilMethods.isEventNumber(4);
// console.log(`Is even number : ${isEvenNumber_}`);

// Destructure
const {isEventNumber, isOddNumber} = require('../../utils/UtilMethods');
const readline = require("readline-sync");

// import {isEventNumber} from "./UtilMethods";
let isEvenNumber_ = isEventNumber(4);
console.log(`Is even number : ${isEvenNumber_}`);

let isOddNumber_ = isOddNumber(4);
console.log(`Is even number : ${isOddNumber_}`);


// Get a user input then check if it's even or odd number
let userInput = getUserInput();
let isEvenNumber = isEventNumber(userInput);

function getUserInput() {
    return Number(readline.question("Please input the number: "));
}

if (isEvenNumber) {
    console.log(`the number ${userInput} is an even number`);
} else {
    console.log(`the number ${userInput} is an odd number`);
}