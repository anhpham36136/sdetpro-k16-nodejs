const {isEventNumber} = require('../../utils/UtilMethods');

let intArr = [1, 2, 3, 4, 5];

let totalEvenNum = 0;
let totalOddNum = 0;

// for (let i = 0; i < intArr.length; i++) {
//     if (intArr[i] % 2 === 0) {
//         totalEvenNum++;
//     } else {
//         totalOddNum++;
//     }
// }

for (let i = 0; i < intArr.length; i++) {
    if (isEventNumber(intArr[i])) {
        totalEvenNum++;
    } else {
        totalOddNum++;
    }
}
console.log("Even numbers:", totalEvenNum);
console.log("Odd numbers:", totalOddNum);