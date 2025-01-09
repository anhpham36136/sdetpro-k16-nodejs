const {isOddNumber} = require("../../utils/UtilMethods") ;

let myArray = [1, 2, 3, 4, 5];

console.log(myArray);
console.log("=====");

// Filter to get even numbers from array
// Higher Order Function: HOP
let evenNumber = myArray.filter(function (value, index, array) {
    return value % 2 === 0;
});
console.log("new even number array filtered", evenNumber);
console.log("=====");

console.log("array after filter", myArray);
console.log("=====");

let oddNumber = myArray.filter(isOddNumber);
console.log("new odd number array filtered", oddNumber);
