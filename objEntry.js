function entry(){ 
    const car ={
    name:'BMW-GT',
    milage: 40,
    ob:{num:55},
    bool: false
}
// arr = [['a1','10'],['a2','20'],['a3','30']];
arr = ['a','b','c','d'];
 //arr = ['a1','10','a2','20','a3','30'];
 console.log(Object.entries(car),typeof car,'\n',
             Object.entries(arr),'\t',typeof arr);

console.log(Object.fromEntries(Object.entries(arr.map(funcArr))));
console.log(Object.getOwnPropertyDescriptors(car))
console.log(Object.getOwnPropertyNames(car))
}
 function funcArr(){
    for(let i of arr )
         return(i.toUpperCase())            
}
entry();