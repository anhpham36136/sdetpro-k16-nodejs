// Create
let myArray = [1, 2, 3, 4, 5];

// Get the array's length
console.log(`Array's length: ${myArray.length}`);
console.log("=======");


// Read
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("=======");

for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}
console.log("=======");

// Undefined holes
myArray[5] = 6;
myArray.push(7);
console.log(myArray);

let removedValue = myArray.pop();
console.log("value removed", removedValue);
console.log("array after removed", myArray);