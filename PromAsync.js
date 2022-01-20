let msg = new Promise(resolve=>{
 resolve('Promise Async Await ')});
 let val;
function noAsync(){
 //return Promise.resolve(msg);
 return Promise.resolve(Promise.resolve(msg));
}
//async()=> val = await yesAsync();

   async function yesAsync(){
   // return Object.valueOf(msg);
 //  return Object.values(Promise.resolve(msg));
 return  msg;
}
async function value(){
  // val = await yesAsync();
    val =  yesAsync();
    console.log(val);
}
value();
console.log(noAsync());
console.log(msg===noAsync());
console.log(msg===yesAsync());
