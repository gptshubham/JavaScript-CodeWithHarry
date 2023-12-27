// for loops 
// printing numbers from 1 to 10;
/*
for (let i=1;i<=10;i++){
    console.log(i);
}
*/


// program to add first n natural numbers;
// let n = prompt("Enter n: "); // prompt doesn't work in node.js
/*
const n = 20;
let sum = 0;
for (let i=1;i<=20;i++){
    sum += i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}.`);
*/


// frogram to calculate factorial
/*
const n = 6;
let fact = 1;
for (let i=1;i<=n;i++){
    fact *= i;
}
console.log(`${n} factorial = ${fact}`)
*/


// for in loop
/*
const user = {
    name:"shubham",
    age: 22,
    gender: "male",
    occupation: "programmer",
}
// for (let i in user){
//     console.log(i);
// }
for (let i in user) {
    console.log(i + " : " + user[i]);
}
*/


// for of loop
const firstName = "shubham";
for (let i of firstName){
    console.log(i);
}
