// T21: JavaScript Chapter 5 - Practice Set on Arrays


// 1. create an array of numbers and take input from the user to add numbers to this array 
// this code works with developer's console (developer tools -> sources -> snippets) and not with node.js
/*
const numArray =[10,20,30,40,50];
const n = parseInt(prompt("Enter the length : "));
numArray.push(n);
console.log(numArray);
*/


// 2. keep adding numbers to the array in Q1 until 0 is added to the array 
// this code works with developer's console (developer tools -> sources -> snippets) and not with node.js
/*
// using while loop
const arr = [10,20,30];
console.log(arr);
let a = 1;
let b = 1;
while(a != 0){
    b = parseInt(prompt("enter the number : "));
    arr.push(b);
    a = b;
}
console.log(arr);
*/

// using do while loop 
// this code works with developer's console (developer tools -> sources -> snippets) and not with node.js
/*
const arr = [10,20,30];
console.log(arr);
let a = 1;
do{
    a = parseInt(prompt("enter the number : "));
    arr.push(a);
} while(a != 0);
console.log(arr);
*/


// Q3. filter for numbers divisible by 10 from a given array.
/*
const num = [5,7,120,49,40,55,67,70,84,90,1108,4150];
const newNum = num.filter((element)=>{
    // if(element%10 === 0){
    //     return element;
    // }
    return element%10 === 0;
})
console.log(num);
console.log(newNum);
*/


// 4. create an array of squares of given numbers
/*
const num = [5,7,12,9,11,15];
const newNum = num.map((element)=>{
    return element * element;
})
console.log(num);
console.log(newNum);
*/


// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial need to be calculated).
const naturalNumbers = [1,2,3,4,5,6];
const factorial = naturalNumbers.reduce((a,b)=>{
    return a*b;
})
console.log(factorial);

// using for loop
/*
let fact = 1;
for (let i=1;i<=n;i++){
    fact *= i;
}
console.log(fact);
*/