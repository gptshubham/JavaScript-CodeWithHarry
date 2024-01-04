// firstChild
console.log(document.body.firstChild);
// document.body.firstChild.style.color = "red";
// lastChild
console.log(document.body.lastChild);
// childNodes
console.log(document.body.childNodes);
// .childNodes[i]
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[3])
console.log(document.body.childNodes[7])
console.log(document.body.childNodes[11])
// .hasChildNodes() funtion to confirm that an element has child
console.log(document.body.hasChildNodes());
// creating array from child nodes list
const arr = Array.from(document.body.childNodes);
console.log(arr);
/*
for (i of arr){
    console.log(i);
}
*/