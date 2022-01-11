let fruits= ['grapes','mango','apples','apricot'];
let quant= [7,5,6,35,10,0];

function arrAt(){
console.log(fruits.at(3)+" "+fruits.at(-1));
}
function arrConcat(){
    console.log(fruits.concat(quant, "EXTRA String", {key: 10}));
}
function arrCopyWithin(){
console.log(
  fruits.copyWithin(0,1,3)
);
}
function arrEntries(){
    let iterator = fruits.entries();
    for(let i of iterator)
    console.log(i);
}
//arrAt();
//arrConcat();
//arrCopyWithin();
arrEntries();