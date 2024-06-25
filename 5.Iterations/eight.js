const myNums=[1,2,3]


const myTotal=myNums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval;
},0)// accumulator value
console.log(myTotal);


const total=myNums.reduce( (acc,curval) => {
    return acc+curval;
},0)
console.log(total);


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"datascience course",
        price:12999
    },
]

console.log(shoppingCart.reduce( (acc,item) => acc+item.price,0))