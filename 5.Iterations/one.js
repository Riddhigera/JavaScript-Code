//for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

let array=["r","i","d","d"]
//console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
    
}

for(let index=1;index<=10;index++){
    const e=index;
    if(index==5){
       // console.log(`here we get ${index}`);
        break
    }
    //console.log(e);
}
for(let index=1;index<=10;index++){
    const e=index;
    if(index==5){
        console.log(`here we get ${index}`);
        continue
    }
    console.log(e);
}