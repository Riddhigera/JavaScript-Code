const email="riddhi@ai.com"

if(email){
    console.log("yes");
}else{

    console.log("np");
}

//falsey values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values-[],"0",'false'," ",{},function(){}
//Nullish Coalescing operator(??):null undefined
let v1;
v1=5 ?? 10;
console.log(v1);//5
let v2;
v2=null ?? 10;
console.log(v2);//10
// undefined ?? 15//gives 15


//terniary operator
//condition ? true : false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");