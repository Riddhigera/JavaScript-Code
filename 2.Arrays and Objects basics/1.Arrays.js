const myArr=[1,2,3,4];
console.log(myArr);
console.log(myArr[0]);

const names=["ram","sham"]
console.log(names);

const myArr2=new Array(1,23,4,5)
console.log(myArr2);

//Array methods
myArr.push(6);//adding new value at end
myArr.pop();//remove last value
myArr.unshift(9);// add 9 at first index
myArr.shift();//it will remove the first element
console.log(myArr);
console.log(myArr.includes(9));//return true or false
console.log(myArr.indexOf(9));//return index of number and if number not exit the it will return -1

const newArr=myArr.join()// converts all value to string and print them separated by comma
console.log(newArr);

//slice,splice

console.log("A",myArr);//A [ 1, 2, 3, 4 ]

const myn1=myArr.slice(1,3);
console.log(myn1);//[ 2, 3 ]
console.log("B",myArr);//B [ 1, 2, 3, 4 ]

const myn2=myArr.splice(1,3);
console.log("C",myArr);//C [ 1 ]
console.log(myn2);//[ 2, 3, 4 ]


