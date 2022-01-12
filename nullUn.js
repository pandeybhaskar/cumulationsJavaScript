// let a=null;
let b;
function print(){
    console.log(a+" "+b);
}
function nullFunc(){
   a=2;     // But here it automatically gets initialised with (var) keyword, why not in pushPop() ?
    a = a*2;
    console.log(a);
}
function equal(){
    if(a==b)
    console.log("true")
    else if(a==="0")
    console.log("triple===")
    else
    console.log("false")

}
//print();
nullFunc();
equal();