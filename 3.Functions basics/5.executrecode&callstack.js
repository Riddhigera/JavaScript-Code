//JavaScript execution context
//first thing while execution is {}=>Global EC(this variable)
//this whole process is executed on single thread
//js is single threaded in which everything is a process
//second is functional execution context
//third is eval execution context(property of a global object)

//Memory creation phase(memory locate for variables declared)
//execution phase

let v1=10
let v2=5
function addNum(n1,n2){
    let total=n1+n2
    return total
}
let r1=addNum(v1,v2)
let r2=addNum(10,2)

//Step1=>Global execution=>firstly locate it in "this"
//phase 2=>memory phase---- store all variables and and pass them value undefined  v1=undefied,v2=undefined,addnum=defination,r1=undeined,r2=undefined
//execution phase=>>v1=10,v2=5,
// create a box addnum==new variable enviornment+execution thread 
//execution of box=memory phase=> v1,v2=undefined,total=undefined
//execution thread n1=10,n2=5,total=15// return and the delete and again do execution

//now we get new variable environment and thread and then memory and execution phase we peform

//****************Call Stack****************************/

// we have a stack and put global execution and then add function one by one and remove them from stack after execution
//and if we have nested functions in stack then LIFO is performed last function executes first and come out of the stack




