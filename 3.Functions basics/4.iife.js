//Immediately Invoked Function Expressions(IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//named iife
(function chai(){
    console.log(`DB connected`);
})();//due to pollution caused by global scope and to remove the polution og global scope we used iife

//unnamed iife
(()=>{
    console.log(`db contectd`);
})();

((name)=>{
    console.log(`db contectd for ${name}`);
})('riddhi');

//for writing two iify you always have to put a semi colon at end of every function
