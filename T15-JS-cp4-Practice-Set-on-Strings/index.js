// JavaScript Chapter 4 - Practice Set on Strings

// 1. What will the following print in JavaScript : console.log("Har\"".length)
/*
console.log("Har\"".length)
console.log("Har\"")
*/

// 2. Explore the includes, startswith and endswith functions of a string.
/*
const fullName = "Shubham Kumar Gupta";
// console.log(fullName.includes("Gupta"));
// console.log(fullName.includes("Mathur"));

// console.log(fullName.startsWith("s"));
// console.log(fullName.startsWith("S"));
console.log(fullName.startsWith("Shubham"));
// console.log(fullName.endsWith("A"));
// console.log(fullName.endsWith("a"));
console.log(fullName.endsWith("Gupta"));
*/

// 3. write a program to convert a given string to lowercase
/*
const fullName = "Shubham Kumar Gupta";
console.log(fullName);
console.log(fullName.toLocaleLowerCase());
*/

// 4. Extract the amount out of this string : "please give Rs 1000"
/*
let sentence = "please give Rs 1000"
let start = sentence.indexOf("1");
// let end = sentence.lastIndexOf("0");
let amount = parseInt(sentence.slice(start));
console.log(amount);
console.log(typeof amount);
*/

// 5. Try to change 4th character of a given string.
// were you able to do it
let firstName = "Shubham";
console.log(firstName);
firstName[3] = "c";
console.log(firstName);