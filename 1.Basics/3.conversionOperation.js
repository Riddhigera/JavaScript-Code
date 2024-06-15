// let score="33"
// console.log(typeof(score));

// let sum="45"
// let valueofsum=Number(sum)
// console.log(typeof valueofsum);

// let sim="45abc"
// let valueofsim=Number(sim)
// console.log(typeof valueofsim);
// console.log(valueofsim);//NaN

// let sim=null
 // console.log(valueofsim); ->return 0

// let sim=undefined
// console.log(valueofsim); ->return NaN

// let sim=true
// console.log(valueofsim); ->return 1

// let sim=false
// console.log(valueofsim); ->return 0


//"33"=>33
//"33abc"=>NaN
//true=>1,false=>0
//""=>false
//"ram"=>true


// let isLoggedIn=1

// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber=67
// let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//**********************************Operations***********************/
let value=3
let number=-value
console.log(number);

let str1="ram"
let str2 =" sham"
let str3=str1+str2
console.log(str3);

console.log("1"+2+2);//122 bcz starting with string
console.log(1+2+"2");//32  bcz starting with number

console.log("1"+(2+2));//14

console.log(+true);//1
console.log(true);//true
console.log(+"");//0

let gameCounter=50
gameCounter++;
console.log(gameCounter);//51

let gameCount=50
++gameCount;
console.log(gameCount);//51

