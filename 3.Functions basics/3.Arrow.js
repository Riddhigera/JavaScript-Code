const user={
    username:"riddhi",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//give current context
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);//empty object =>{}


function Number(){
    console.log(this);
}
Number()//global obect and many more values

//***************************ARROW FUNCTION**************/

const chai=()=>{
    let username="riddhi"
    console.log(this);//{}
}
chai()


//pure arrow function
//()=>{}  basic arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

//implicit return when statement is of one line
const multiplyTwo=(n1,n2)=> (n1*n2)
console.log(multiplyTwo(3,4));//12


//for returning an object
const name=()=>({username:"riddhi"})
console.log(name());//{ username: 'riddhi' }

