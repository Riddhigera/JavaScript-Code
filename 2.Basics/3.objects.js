//if object is made with constructor then singleton is formed whereas singleton is not formed in the case of literal
//constructor method(Object.create)

//object literals

const mySym=Symbol("key1")


const JsUser={
    name:"Riddhi",
    "full name":"Riddhi Gera",
    [mySym]:"mykey1",
    age:21,
    location:"Jaipur",
    email:"riddhi@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="riddhi04@gmail.com";
console.log(JsUser["email"]);//print the updated email

//Object.freeze(JsUser);//it will lock the details and now we can't change anything in the object
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js User");

}

//console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);

}
console.log(JsUser.greetingTwo());