let myArray = [1, 2, 3, 4, 5 , 6, 7, 8, 9 , 10 ];

// // DELETE | splice
// let startIndex = 2 ;
// let deleteCount = 1;
// let insertValues = 10;
// let returnedValue = myArray.splice(startIndex, deleteCount , insertValues);
// console.log(returnedValue);


for (let index = 0; index < myArray.length; index++){
    if (isOddNumber(myArray[index])){
        removeElementFromArray(myArray, index);
        index--;
    }

}
console.log(myArray);

function isOddNumber(number) {
    return number % 2 !== 0 ;
}

function removeElementFromArray(array , startIndex){
    const defaultDeleteCount = 1;
    array.splice(startIndex, defaultDeleteCount)
    
}     