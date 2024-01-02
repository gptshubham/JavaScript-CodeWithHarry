// Practice Problem 1, 2 & 3
/*
const canDrive = (age)=>{
    return age>=18?true:false;
}

let runAgain = true;
while(runAgain) {
    let age = parseInt(prompt("Enter your age here: ","17"));
    if(age<0) {
        console.error("Please enter a valid age");
        break;
        // age = parseInt(prompt("Please enter a valid age : "));
    }
    if(canDrive(age)) {
        alert("You are eligible to drive.");
    }
    else {
        alert("You are not eligible to drive .");
    }
    runAgain = confirm("Do you want to try again ?");
}
*/


// Practice Problem 4
/*
let userInput = parseInt(prompt("Enter a number here: "));
if(userInput > 4) {
    location.href = "https://www.google.com/";
}
*/
// Practice Problem 5
/*
let userInput = parseInt(prompt("Enter a number here: "));
let backColor;
switch(userInput) {
    case 1:
        document.body.style.background = "red";
        break;
    case 2:
        document.body.style.background = "green";
        break;
    case 3:
        document.body.style.background = "yellow";
        break;
    default:
        document.body.style.background = "yellowgreen";
}
*/
let userInputColor = prompt("Enter colour here: ");
document.body.style.background = userInputColor;