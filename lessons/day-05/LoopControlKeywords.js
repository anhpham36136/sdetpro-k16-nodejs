// break

let array = [1, 2, 3, 4, 5];
let targetIndex = -1;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 6){
        targetIndex = index;
        break;
    }
    
}

if(targetIndex < 0){
    console.log('No number found!');
    
}else{
    console.log(`The number first found at index ${targetIndex}`);
}

//continue 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 6){
        targetIndex = index;
        continue;   
}else {
    console.log(element);
    }
}

// An array of POSITIVE interger number , number 3 mong them.
// Increased up to 4 for the rest of numbers.
increaseValues(array);
console.log(array);

function increaseValues(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 3){
            continue;
        }else{
            array[index] = array[index] + 3;
        }
        
    }

    //console.log('Function is being executed...');
    
}