// String Methods
let firstName = "Shubham";
// console.log(firstName);

/*
// .length
console.log(firstName.length);
// .toUpperCase
firstName = firstName.toUpperCase();
console.log(firstName);
// .toLowerCase
firstName = firstName.toLocaleLowerCase();
console.log(firstName);
*/

/*
// .slice(start,end)
const fullName = "Shubham Kumar Gupta";
const middleName = fullName.slice(8,13);
console.log(middleName);
const lastName = fullName.slice(14);
console.log(lastName);
*/

// .replace(target,replacement)
/*
let fullName = "Shubham Kumar Gupta";
fullName = fullName.replace("Kumar Gupta","Gupta");
console.log(fullName);
*/

// .concat() --> can take any number of arguments.
/*
firstName = "Shubham";
let brother = "Abhishek";
let friend = "Mayank";
let sentense = firstName.concat(" is brother of ",brother," and friend of ",friend,".");
console.log(sentense);
*/

// .trim()
/*
firstName = "Shubham                     ";
let lastName = "Gupta";
console.log(firstName + lastName);
console.log(firstName.trim() + lastName);

let middleName = "          Kumar              ";
console.log(firstName.trim() + middleName.trim() + lastName);
*/

// .indexOf(target)
const fullName = "Shubham Kumar Gupta";
let index = fullName.indexOf(" ");
console.log(index);
index = fullName.indexOf("a");
console.log(index);
// .lastIndexOf(target)
index = fullName.lastIndexOf("a");
console.log(index);
