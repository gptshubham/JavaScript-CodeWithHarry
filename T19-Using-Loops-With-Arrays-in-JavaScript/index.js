// T19 : Using Loops With Arrays in JavaScript
let num = [6,12,17,19,21,25,16]

// Classic for Loop
/*
for (let i=0;i<num.length;i++){
    console.log(num[i]);
}
*/
// .forEach Loop
/*
num.forEach((element) => {
    console.log(element*element);
});
*/
// alternatively we can define callback separately --> not a good idea.
num = [6,12,17,19,21,25,16];
const newArray = [];
num.forEach((n)=>{
    // console.log( n*n);
    newArray.push(n*n);
});
console.log(newArray);
// That's exactly what map does.

// array.from(str or html collection)
/*
const firstName = "shubahm";
console.log(firstName);
const nameArray = Array.from(firstName);
console.log(nameArray);
*/

// for in loop
/*
num = [6,12,17,19,21,25,16];
for(i in num){
    console.log(num[i]);
}
*/
// for of loop
/*
num = [6,12,17,19,21,25,16];
for ( i of num){
    console.log(i);
}
*/
