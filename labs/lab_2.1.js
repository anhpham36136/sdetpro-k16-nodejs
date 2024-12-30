/*
Get input from user about height(m) and weight(kg) then calculate BMI

Underweight: <18.5
Normal weight: 18.5 – 24.9
Overweight: 25–29.9
Obesity: BMI of 30 or greater
BMI = weight / (height x height)
*/

const readline = require('readline-sync');
let height = Number(readline.question('Your heigth(m): '));
let weight = Number(readline.question('Your weigt(kg): '));
let BMI = weight / (height * height);

if (BMI < 18.5){
    console.log('You are underweigh ');
}else if (BMI < 24.9){
    console.log('You are normal weight ');
}else if (BMI < 29.9 ){
    console.log('You are overweightt ');
}else{
    console.log('You are obese')
}