let array = [1, 2, 3, 4, 5];

// // Map 
// let returnValues = array.map(myRule);
// console.log(returnValues);
// console.log(array);


// function myRule(value , index , array) {
//     return value * 2;
// }

//forEach
let userList = [];
array.forEach(addAutomationUsername);
function addAutomationUsername(value , index ,array){
    userList.push(`AutometionUser_${value}`)
    
}
console.log(userList);

// Sort - String
let strings = ['B' , 'C' , 'A'];
// strings.sort();
// strings.reverse();
// console.log(strings);

// Sort - Number | Not approriate
let anotherArray = ['100' , '19' ,22];
anotherArray.sort(sortNumberASC);
anotherArray.sort(sortNumberDESC);
console.log(anotherArray);

function sortNumberASC(num1 , num2) {
    return num2 - num1;
}

function sortNumberDESC(num1 , num2) {
    return num1 - num2;
}

let mixeContent = ['a' , 'A' , '1'];
mixeContent.sort();
console.log(mixeContent);



