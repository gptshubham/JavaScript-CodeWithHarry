// T20 - map, filter, reduce
let num = [6,12,17,19,21,25,16];

// a.map(cb)
/*
num = [6,12,17,19,21,25,16];
const newArray = num.map((element)=>{
    return element*element;
})
console.log(num);
console.log(newArray);
*/

// a.filter(cb)
/*
num = [6,12,17,19,21,25,16];
const newArray = num.filter((element)=>{
    if(element < 20){
        return element;
    }
})
console.log(newArray);
*/

// a.reduce(cb)
num = [6,12,17,19,21,25,16];
const numTotal = num.reduce((a,b)=>{
    return a+b;
})
// console.log(numTotal);
console.log(typeof numTotal);

const numProduct = num.reduce((a,b)=>{
    return a*b;
})
// console.log(numProduct);
// this one is certainly not very usefull 😜