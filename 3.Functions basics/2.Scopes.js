var c=300
//block scope
if(true){
    let a=10;
    const b=20;
    var c=30;
}
//console.log(a);//not executed(a is not defined)
//console.log(b);//not executed(ReferenceError: b is not defined)
//console.log(c);//30

let d=35;//global scope
if(true){
    let d=21;
    const e=56;
    console.log("d is",d);//d is 21
}
console.log(d);//35

//nested scope
function one(){
    const username="riddhi"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()//riddhi

function addone(num){
    return num+1
}
console.log(addone(5))

const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
