const marks_class_12 = [91,82,63,84,null,false,"absent"];
console.log(marks_class_12);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[10]);
// console.log(marks_class_12.length);

// marks_class_12[7] = 89;                  // we can add new values to a const array.
// console.log(marks_class_12[7]);
// console.log(marks_class_12);
// marks_class_12[2] = 52;                  // we can edit exiting values of const array.
// console.log(marks_class_12);

// console.log(typeof marks_class_12);      // array in JS is an object.

// Quick Quiz : using for loop on an array
/*
for (let i=0; i<marks_class_12.length;i++){
    console.log(marks_class_12[i]);
}
*/
// Quick Quiz : using for in loop on an array
/*
for(i in marks_class_12){
    console.log(marks_class_12[i]);
}
*/
// Quick Quiz : using for of loop an array
for(i of marks_class_12){
    console.log(i);
}