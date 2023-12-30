// Array Methods 2

// delete
/*
const num = [7,10,13,17,20,25,23,29,30];
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);
delete num;
console.log(num);
*/

// .concat()
/*
const num = [7,10,13,17,20,25,23,29,30];
const numMore = [17,110,113,117,120,125,123,129,130];
// const newArray = num.concat(numMore);
// console.log(num);
// console.log(newArray);

const numEvenMore = [217,2110,2113,2119,2120,2125,2123,2129,2130];
const moreNewArray = num.concat(numMore,numEvenMore);
console.log(moreNewArray);
*/

// .sort() --> Alphabetically
let num = [526,117,248,365,420,97,81,93,"skg",76,85,91,"kgs",71,99,"gks"];
/*
console.log(num);
num.sort();
console.log(num);
*/
// sorting in descending order
/*
let compare = (a,b)=>{
    return b - a;
}
num.sort(compare);
console.log(num);
*/

// sorting in ascending order
/*
let compare = (a,b)=>{
    return a - b;
}
num.sort(compare);
console.log(num);
*/

// .reverse()
/*
num.reverse();
console.log(num);
*/

// splice and slice

// .splice()
num = [526,117,248,365,420,97,81,93,76,85,91,71,99];
/*
// let splicedArray = num.splice(2,3,1072,1082);
// console.log(num);
// console.log(splicedArray);

// let splicedArray = num.splice(2,3,1072,1082,1092);
// console.log(num);
// console.log(splicedArray);

let splicedArray = num.splice(2,3,1072,1082,1092,1012,1022,1032,1042);
console.log(num);
console.log(splicedArray);
*/

// .slice()

num = [526,117,248,365,420,97,81,93,76,85,91,71,99];
let slicedArray =  num.slice(5);
console.log(num);
console.log(slicedArray);
let newSlicedArray = num.slice(3,6);
console.log(newSlicedArray);
