// for each loop
const coding=['js','ruby','java','python','cpp']
coding.forEach(function(item){
    //console.log(item);
} )

coding.forEach((i)=>{
  //  console.log(i);
}
)

function printME(item){
    console.log(item);
}
//coding.forEach(printME)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]

mycoding.forEach( (item) => {
    console.log(item);
})