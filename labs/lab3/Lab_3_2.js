/*
Finding maximum value/minimum value from an integer array
let intArr = [1, 2, 3, 4, 5];
Minimum: 1
Maximum: 5
*/

let intArr = [1, 2, 3, 4, 5];
let maxValue = intArr[0];
let minValue = intArr[0];

for (let i = 1; i < intArr.length; i++){
    if (intArr[i] > maxValue){
        maxValue = intArr[i];
    } else if (intArr[i] < minValue){
        minValue = intArr[i];
    }
}   

console.log(`Minimum: ${minValue}`);
console.log(`Maximum: ${maxValue}`);