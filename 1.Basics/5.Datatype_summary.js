// Primitive data type(call by value)
// 7 type:String,Number,Boolean,null,undefined,Symbol,BigInt


// JavaScript is a dynamically language and not static,which means that variables can hold values of different types during runtime.

//Non-Primitive(refernce type)
//array,objects,functions

const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);


const fruits=["apple","banana","orange"];
let myObj={
    name:"ram",
    agr:22,
}
const myFunction=function(){
    console.log("Helo world");
}

console.log(typeof myFunction)//object function
console.log(typeof fruits)//object
console.log(typeof myObj)//object

//***************** Stack and Heap Memory****************/

//Memory is of two type Stack(primitive) and heap(non-primitive)

//stack give copy and heap gives reference of original value

let myYoutubename="riddhidotcom";
let anothername=myYoutubename;
anothername="chaiaurcode";
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="riddhi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

 