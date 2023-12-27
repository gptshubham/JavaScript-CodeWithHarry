// write a funtion to add two numbers
/*
function sumOf(m,n){
    const ans = m+n;
    return ans;
}

// let a = 2;
// let b = 3;
// let sum = sumOf(a,b);
// console.log(`Sum of ${a} and ${b} is ${sum}`);


a = 33;
b = 49;
sum = sumOf(a,b);
console.log(`Sum of ${a} and ${b} is ${sum}`);
*/


// write a function to calculate average of two numbers.
/*
function avgOf(m,n){
    const avg = (m+n)/2;
    return avg;
}

console.log(avgOf(15,17));
*/

// write a function to calculate average of two numbers using arrow funtions
const avgArrowFunction = (m,n)=> {
    const avg = (m+n)/2;
    // return avg;
    console.log(avg);
}

let a = 33;
let b = 49;
avgArrowFunction(a,b);