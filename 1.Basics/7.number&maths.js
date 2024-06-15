const score=400
//console.log(score);
const balance=new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(typeof balance);

const otherNumber=23.4567 //23.5
//console.log(otherNumber.toPrecision(3));

const firstNumber=123.567 //124
//console.log(firstNumber.toPrecision(3));

const secondNumber=2332.8567 //2.33e+3
//console.log(secondNumber.toPrecision(3));

const hundreds=1000000
//console.log(hundreds.toLocaleString());//default US

const hundreds1=1000000
//console.log(hundreds1.toLocaleString('en-IN'));


//**********************************MATHS***********************/
console.log(Math);//object
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,3));
console.log(Math.max(4,9));
console.log(Math.random());// any random value between 0 and 1

console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1) )+ min);