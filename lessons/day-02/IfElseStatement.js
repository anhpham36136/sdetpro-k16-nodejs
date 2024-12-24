const readline = require('readline-sync');

let arriavalTime = readline.question('Arrival Time: ');
let isHeOntime = (Number(arriavalTime) === 7);

// > , < , >= , <= , == , === , != , !==
// !: to revert a boolean value 

if(isHeOntime){
    console.log("Let' talk!");
    
}else {
    console.log("Write a letter....");
    
}


if(!isHeOntime){
    console.log("Let' talk!");
    
}else {
    console.log("Write a letter....");
    
}

// Ternary Operator : Toán tử ba ngôi
let msg = isHeOnetime 
console.log(msg);