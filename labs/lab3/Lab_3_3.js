const {sortArrayMinToMax, sortArrayMaxToMin} = require('../../utils/UtilMethods');

let intArr = [12, 34, 1, 16, 28];

let sortedMinToMaxArray = sortArrayMinToMax(intArr);
console.log("Min to max array:", sortedMinToMaxArray);

let sortedMaxToMinArray = sortArrayMaxToMin(intArr);
console.log("Max to min array:", sortedMaxToMinArray);