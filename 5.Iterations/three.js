// for of loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="Hello world"
for (const g of greetings) {
    console.log(`each char is ${g}`);
    
}

//Maps
//it is itself an object,cannot contain duplicate values only store unique value in given order
const map=new Map()
map.set('IN',"India")
map.set('USA',"UNited states of America")
map.set('fr',"france")
console.log(map);
//output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'UNited states of America',
//     'fr' => 'france'
//   }

for (const key of map) {
    console.log(key);
}
//output
// [ 'IN', 'India' ]
// [ 'USA', 'UNited states of America' ]
// [ 'fr', 'france' ]

for (const [key,value] of map) {
    console.log(key,':-',value);
}
//output
// IN :- India
// USA :- UNited states of America
// fr :- france

const myObject={
    'game1':"nfs",
    'game2':"spiderman"
}
