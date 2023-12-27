// JS cp3 Practice Set on Loops and Functions

// 1. write a program to print marks of a student in an object using for loop 
/*
const marks = {
    harry: 9,
    rohan: 87,
    rahul: 42,
    shubham: 90
}
let student = "shubham";

// console.log(Object.keys(marks).length);
// console.log(Object.keys(marks)[3]);
// console.log(marks[Object.keys(marks)[3]]);

for (let i=0;i<Object.keys(marks).length;i++){
    if(Object.keys(marks)[i] == student){
        console.log(Object.keys(marks)[i] + " : " + marks[Object.keys(marks)[i]] )
    }
}
*/


// 2. write a program to print marks of a student in an object using for in loop 
/*
const marks = {
    harry: 9,
    rohan: 87,
    rahul: 42,
    shubham: 90
}

let student = "shubham";
for (key in marks){
    if(key == student){
        console.log(student + " : " + marks[key]);
    }
}
*/


// 3. Write a progam to print "try again" untill the user enters the correct number
/*
// this code only works on google developer's console
// it does not work on node.js or replit
const correctNumber = 15;
let userInput = prompt("Enter the correct Number : ")
while(userInput != correctNumber){
    console.log("Try again!")
  userInput = prompt("Enter the correct Number : ");
}
console.log("Correct Guess !")
*/

// 4. Write a function to find mean of 5 numbers
const meanOf = (a,b,c,d,e)=> {
    const ans = (a+b+c+d+e)/5;
    return ans;
}

let mean = meanOf(10,20,30,40,50);
console.log(mean);