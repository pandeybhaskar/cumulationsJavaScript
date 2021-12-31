let a,b;
function go(a,b,callback){
   setTimeout(()=> {console.log(a+b)},1000);
   callback();
}
function afterGo(){
    console.log("this was after go()");
}
go(5,6,afterGo);