// log
console.log(console);
// error
console.error("hey this is an error!");
// assert 
console.assert(5>53);
console.assert(555>53);
console.log(console.assert);
// clear
console.clear();
// table
const obj = {
    name:"shubham",
    age: 22,
    gender: "male",
    occupation: "programmer",
    country: "India"
}
console.table(obj);
// warn
console.warn("Virus Alert!");
// info
console.info("Hey this is an important info!");
// time, timeEnd
console.time("a");
const n = 1000;
let sum = 0;
for(let i=0;i<=n;i++){
    sum += i;
}
console.timeEnd("a");