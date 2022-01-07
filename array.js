let fruits, quant, i;
fruits= ['grapes','mango','apples','apricot'];
quant= [7,5,6,3.5];

function un_shift(){
    fruits.unshift('pineapple');
    fruits.forEach(element => {
        console.log(element);
    });
    console.log("Shift- "+fruits.shift());
    fruits.forEach(pushPop);
}

console.log("AfterUn_Shift...Before PushPop");

function pushPop(){
for(i in quant){
    console.log(quant);
}
}

function slice(){
    let a= quant.slice(1,3);
    console.log("Slice- "+a);
}
function calc(num){
    return num*2;
}
function maps(){
    let quantMap= quant.map(calc);
    console.log("mapped Quant- "+ quantMap+ " "+ typeof quantMap);
}

un_shift();
slice();
maps();