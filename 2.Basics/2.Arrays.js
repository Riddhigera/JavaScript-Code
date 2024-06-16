const marvel_heros=["thor","spiderman","Ironman"]
const dc_heros=["superman","flash","batman"]

all_heros=marvel_heros.concat(dc_heros);//return new array
console.log(all_heros);//[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]
//... spread operator
const all_new_heros=[...marvel_heros,...dc_heros]//... makes each element individula
console.log(all_new_heros);//[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

//flat=returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);//[
  //  1, 2, 3, 4, 5,
    //6, 7, 6, 7, 4,
    //5
  //]

console.log(Array.isArray("Riddhi"));//false
//from-creates an array from an iterable object
console.log(Array.from("Riddhi"));//[ 'R', 'i', 'd', 'd', 'h', 'i' ]
console.log(Array.from({name:"Riddhi"}))//[]

let score1=100
let score2=200
let score3=300
//of-return a new array from a set of elements
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

