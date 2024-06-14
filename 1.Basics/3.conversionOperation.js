let score="33"
console.log(typeof(score));

// let sum="45"
// let valueofsum=Number(sum)
// console.log(typeof valueofsum);

let sim="45abc"
let valueofsim=Number(sim)
console.log(typeof valueofsim);
console.log(valueofsim);//NaN

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


let isLoggedIn=1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber=67
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
