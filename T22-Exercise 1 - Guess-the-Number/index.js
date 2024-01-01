// T22: Exercise 1 - Guess the Number 
// this code works with developer's console (developer tools -> sources -> snippets) and not with node.js
const max = 101;
const min = 1;
const valueToGuess = Math.floor(Math.random() * (max-min) + min);
// console.log(valueToGuess);
let userGuess = parseInt(prompt("Guess the number : "));
// console.log(userGuess);
let i = 1;
while (userGuess !== valueToGuess){
    if(userGuess > valueToGuess){
        userGuess = parseInt(prompt("Guess Lower : "));
    } else if (userGuess < valueToGuess){
        userGuess = parseInt(prompt("Guess Higher : "));
    }
    i++;
}
if(userGuess === valueToGuess){
    console.log(`Correct! ${valueToGuess}`);
    console.log(`Your Score : ${max - 1 - i}`);
}