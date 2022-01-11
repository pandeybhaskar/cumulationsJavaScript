let fruits= ['grapes','mango','apples','apricot'];
let quant= [7,5,6,35,10,0];
function arrEvery(){
    let val = (currentVal)=>currentVal<50
    let quant= [7,5,6,35,10,0];
   console.log(quant.every(val));
}
function arrFill(){
    console.log(fruits.fill("cane",2,5));
}
function arrFilter(){
     quant = quant.filter((element,index,arr)=> arr[index]<20)
    quant.pop();
  //  console.log(val);
    console.log(quant)
}
function arrFind(){
    elm='grapes'
    let val = fruits.find((elm,index,arr)=>arr[index]==="grapes")
    console.log(val)
    console.log("Index of Grapes- "+ fruits.indexOf(val));
    console.log("Includes apples- "+ fruits.includes('apples')+"- array affected");
    console.log("Includes cane- "+ fruits.includes('cane')+" at "+ fruits.indexOf('cane'));
    console.log(fruits.join("+"))

}
arrEvery();
arrFill();
arrFilter();
  console.log(quant+" array affected Globaly") 
arrFind();
