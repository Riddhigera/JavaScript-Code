// for in loop on object
const myobj={
    js:"JavaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myobj) {
    console.log(myobj[key]);
}
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
// for in loop on array
const programming=["ab",'ba','fs','sf','sd','sfsd']
for (const key in programming) {
    console.log(key);// return index of all values
}
for (const key in programming) {
    console.log(programming[key]);// return values
}

// for in loop on map
//map is not iteratable that's why we cannot apply for in loop on map
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"UNited states of America")
// map.set('fr',"france")
// for (const key in map) {
//     console.log(key);
// }

