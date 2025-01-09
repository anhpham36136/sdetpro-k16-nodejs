const readline = require('readline-sync')
let index = 0;
while (index < 5) {
    console.log(index);
    index++;
}


//Conditional change trigger 
/**
            * ---LUCKET NUMBER GAME ---
            * 1. Guest a number 
            * 0. Exist !
            */

let isStillPlaying = true ; 
while(isStillPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if(userOption ===0){
        // Conditional change trigger
        isStillPlaying = false;
        
    }else if (userOption === 1){
        let randomNumber = Math.floor(Math.random() * 10) + 1 ;
        console.log(`Lucky number : ${randomNumber}`);
        
    }else {
        console.log('Nhap lui roi Teo oi');
        
    }
}
console.log('See you again!');

    function printGameMenu() {
        console.log(/**
            * ---LUCKET NUMBER GAME ---
            * 1. Guest a number 
            * 0. Exist !
            */);
        
    }
function  getUserOption() {
    return Number(readline.question('Please input your option : '))
}
