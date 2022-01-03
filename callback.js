let a,b;
        //......1.CALLBACK FUNCTION, ASYNCHRONUS DEMONSTRATION
        
function go(a,b,callback){
     setTimeout(() => { console.log(a + b); }, 1);
   callback();
}
function afterGo(){
    console.log("this was after go()");
}
go(5,6,afterGo);

function getCats(){
    let cats= new Promise(function (resolve,reject){
        let rndm = Math.random()*1000;
        console.log("cats random : "+rndm)
        setTimeout(function(){
            resolve(["Meowsalot", "Purrsloud", "BiscuitMaker"])        
    }, rndm)
    })
    return cats;
}

function getDogs(){
    let dogs= new Promise(function(resolve,reject){
        let rndm= Math.random()*1000;
        console.log("dogs random : "+rndm)
        setTimeout(function(){
            resolve(["EatsAnything", "Barksalot", "HeadTilt"])
        }, rndm)

    })
    return dogs;
}


async function wait(){
   let cats = await getCats();
   console.log(cats);

   let dogs = await getDogs();
   console.log(dogs);
}
wait();
/*getCats().then(function(cats){
    console.log(cats);
})
getDogs().then(function(dogs){
console.log(dogs);
})
*/
