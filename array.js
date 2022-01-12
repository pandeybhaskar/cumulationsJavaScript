let fruits, quant, i;
fruits= ['grapes','mango','apples','apricot'];
quant= [7,5,6,3.5,10,0];
i=0;
function un_shift(){
    fruits.unshift('pineapple');
  fruits.forEach((element,index,array) => {
       // pushPop(element,index,array);
     //console.log(fruits)
    });

   fruits.forEach(pushPop(element,index,array)); // But in this pushPop() parameters don't automatically initialize, why ?
  // fruits.shift(); // pineapple out
    //fruits.forEach(pushPop);
   // pushPop();
}
function pushPop(element,index,array){
    console.log(element)

}

function slice(){
    let a= quant.slice(0,3);
    console.log("Slice- "+a);
    quant = quant.sort();
    console.log(quant);
   // console.log() //blankLine
}
function calc(num){
    return num*2;
}
function maps(){
    let quantMap= quant.map(calc);
    console.log("mapped Quant- "+ quantMap+ " "+ typeof quantMap);
}

un_shift();
//slice();
//maps();