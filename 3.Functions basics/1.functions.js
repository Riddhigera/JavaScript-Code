function sayMyname(){
    console.log("R");
    console.log("I");
    console.log("D");
    console.log("D");
    console.log("H");
    console.log("I");
}
//sayMyname-reference of function
//sayMyname()-calling the function or execution

sayMyname()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers()//NaN
addTwoNumbers(4,2)//6
addTwoNumbers(3,"2")//32
addTwoNumbers(3,"a")//3a
addTwoNumbers(3,null)//3

function addTwoNumbers1(n1,n2){
    let result=n1+n2;
    return result;
}
const result=addTwoNumbers1(3,4)
console.log(`Result is ${result}`);

function addTwoNumber(n1,n2){
    return n1+n2;
}
const ans=addTwoNumber(3,4)
console.log(`ans is ${ans}`);

function loginUserMessage(username){
    if(username===undefined){//or we can write=> if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());//undefined just logged in  //Please enter a username(if statement excuted)
console.log(loginUserMessage(""));// just logged in
console.log(loginUserMessage("Riddhi"));//Riddhi just logged in

function calculateCartPrice(...number1){
    return number1
}
console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]

function calculateCartPrice1(val1,val2, ...number1){
    return number1
}
console.log(calculateCartPrice1(200,400,500));//[500]

const user={
    username:"Riddhi",
    price:7876
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
handleobject(user)//Username is Riddhi and price is 7876

const arr=[1,2,3,4,5]
function returnvalue(get){
    return get[1]
}
console.log(returnvalue(arr));//2

