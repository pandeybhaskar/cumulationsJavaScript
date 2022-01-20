 async function fruit(){
//let msg = new Promise(resolve=>setInterval(() => 
  //         { resolve("..comes fruits")}, 2000));
    //       setInterval(() =>null);
let msg = new Promise(resolve=>resolve("..comes fruits"));
return msg;
}
    
async function tree(){
console.log("After tree...");
result = await fruit();
//result = fruit();
 console.log(result);
 console.log("after that Await...")
}
tree();