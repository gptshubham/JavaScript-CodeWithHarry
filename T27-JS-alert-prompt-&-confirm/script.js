// alert("Hello Your Script Works.");
alert("Enter the value of a");
const a = parseInt(prompt("enter a here : ","555"));
alert(`You entered "a" of type ${typeof a}.`);
const write = confirm(`Do you want to write to the page ?`);
if (write){
    document.write(a);
}
else{
    document.write("Please allow me to write.");
}