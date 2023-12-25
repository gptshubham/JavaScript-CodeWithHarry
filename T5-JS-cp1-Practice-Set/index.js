
// 1. Create a variable of type string and try to add a number to it.
/*
let age = "67";
console.log(age);
age += 33;           // leads to string concatination; str + str = string concatination
console.log(age);

// 2. using typeof operator
console.log(typeof age)
*/

// 3. create a const object in JavaScript can you change it to hold a number later.
/*
const user1 = {
    "firstName": "shubham",
    "middleName": "kumar",
    "lastName": "gupta"
}
console.log(user1)

// user1 = "shubham";
// console.log(user1)


// user1 = 420;
// console.log(user1);


// user1 = {
//     name: "shubham",
//     age: 22,
//     gender: "male"
// }
// console.log(user1);

user1[20] = 200;
console.log(user1);

user1["age"] = 22;
console.log(user1["age"]);
console.log(user1);
*/

/*
let user = {
    "firstName": "shubham",
    "middleName": "kumar",
    "lastName": "gupta"
}
console.log(user);
user["age"] = 22;
console.log(user["age"]);
console.log(user);

user = "shubham";
console.log(user);
*/

// 4. try to add a new key to the const object in problem 3.
/*
user1["age"] = 22;
console.log(user1);
*/

// 5. write a JavaScript program to crate a word meaning dictionary containing 5 words.

const dictionary = {
    hello: {
        exclamation: 'used as a greeting or to begin a phone conversation."hello there, Katie!"',
        noun: "an utterance of ‘hello’; a greeting.'she was getting polite nods and hellos from people'",
        verb:"say or shout ‘hello’.'I pressed the phone button and helloed'"
    },
    world: {
        "noun 1": 'the earth, together with all of its countries and peoples."he was doing his bit to save the world"',
        "noun 2": 'a particular region or group of countries."the English-speaking world"'
    },
    web: {
        "noun 1":"a network of fine threads constructed by a spider from fluid secreted by its spinnerets, used to catch its prey.",
        "noun 2":'a complex system of interconnected elements."he found himself caught up in a web of bureaucracy"',
        verb:'cover with or as though with a web."she noticed his tanned skin, webbed with fine creases"'
    },
    development: {
        "noun 1": 'the process of developing or being developed."she traces the development of the novel"',
        "noun 2": "an event constituting a new stage in a changing situation.'I don't think there have been any new developments since yesterday'"
    },
    interest: {
        "noun 1": 'the feeling of wanting to know or learn about something or someone."she looked about her with interest"',
        "noun 2": 'money paid regularly at a particular rate for the use of money lent, or for delaying the repayment of a debt."the monthly rate of interest"',
        verb: 'excite the curiosity or attention of (someone)."I thought the book might interest Eliot"'
    }
}
//console.log(`the meaning of hello is`,dictionary["hello"]);
// console.log("the verbal meaning of hello is :",dictionary["hello"]["verb"])
// console.log("the noun meaning of world is :\n ","1.",dictionary["world"]["noun 1"],"\n 2.",dictionary["world"]["noun 2"])
// console.log("the meaning of world is", dictionary["world"]);

// console.log(dictionary.interest)
console.log(dictionary.interest["noun 1"])
console.log(dictionary.interest.verb)

