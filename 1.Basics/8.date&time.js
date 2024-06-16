//dates
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());//Sat Jun 15 2024 12:00:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat Jun 15 2024
console.log(myDate.toISOString());//2024-06-15T12:01:35.725Z
console.log(myDate.toJSON());//2024-06-15T12:01:55.115Z
console.log(myDate.toLocaleDateString());//6/15/2024
console.log(myDate.toLocaleString());//6/15/2024, 12:03:32 PM
console.log(myDate.toLocaleString('en-IN'));//15/6/2024, 12:04:34 pm
console.log(myDate.toLocaleTimeString('en-IN'));

console.log(typeof myDate);//object

let mynewDate= new Date(2024,0,24)
console.log(mynewDate.toDateString());//Wed Jan 24 2024

let mynewDate1= new Date("04-15-2024")
console.log(mynewDate1.toLocaleString());//4/15/2024, 12:00:00 AM

let myTimeStamp=Date.now();
console.log(myTimeStamp);//1718453467823 in milisecond

console.log(Math.floor(Date.now()/1000));//1718453580

let newDate=new Date()
console.log(newDate.getDay());//6 saturday
console.log(newDate.getMonth()+1);//6 june


console.log(newDate.toLocaleString('default',{weekday:"long"}));//Saturday
