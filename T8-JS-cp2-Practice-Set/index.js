// 1. Use logical Operator to find whether age of a person lies between 10 and 20.
/*
let age = 22;
// console.log(age>=10 && age<=20)
age = 12;
// console.log(age>=10 && age<=20)

// using if-else statements
if (age>=10 && age<=20){
    console.log("Your age lies between 10 and 20.")
}
else {
    console.log("Your age does not lie between 10 and 20.")
}
// using ternary operator
console.log("Your age is",age>=10 && age<=20? "between 10 and 20":"not between 10 and 20")
*/


// 2. Demonstrate Switch-case Statements in JavaScript
/*
let day = 9;
// day = 5;
let dayName;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Unknown Day");
}
*/


// 3. Write a JavaScript program to find if a number is divisible by 2 or 3.
/*
let num = 27;
// num = 28;
// num = 30;
if (num%2==0 && num%3==0){
    console.log(`${num} is divisible by both 2 and 3.`);
}
else if (num%2==0 && num%3 !=0){
    console.log(`${num} is divisible by 2.`);
}
else if (num%3 == 0 && num%2 != 0){
    console.log(`${num} is divisible by 3.`);

}
*/


// 4. Write a JavaScript program to find if a number is divisible by either 2 or 3.
/*
let num = 27;
// num = 28;
// num = 30;
// num = 31;
if (num%2==0 || num%3==0){
    console.log(`${num} is divisible by either 2 or 3.`);
}
else {
    console.log(`${num} is not divisible by 2 or 3.`);
}
*/


// 5. Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.
let age = 17
age = 19;
console.log("you can", age<18? "not drive":"drive")