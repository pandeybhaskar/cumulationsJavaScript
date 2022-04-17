let childNodes = document.body.childNodes;
let parentNodes = window.document.body;
let elm;
function welcome(){
    if(confirm("Enter DOM ?")){
    alert('Welcome to DOM');
    document.getElementById('td1').innerHTML =  childNodes.length;
    document.getElementById('td2').innerHTML = Object.keys(childNodes)        
    document.getElementById('td3').innerHTML =  Object.values(childNodes);
    document.getElementById('para').innerHTML = 'inner height-width:  '+ window.innerHeight +'*'+ window.innerWidth;
    document.getElementById('para1').innerHTML = 'outer height-width:  '+ window.outerHeight +'*'+ window.outerWidth;
    document.getElementById('para2').innerHTML = 'child Element Count in body: '+ parentNodes.childElementCount
                                                  +'_________'+'first child:' + parentNodes.firstChild + '________' +'last child' + parentNodes.lastChild;
    document.getElementById('para3').innerHTML = 'inner Text of '+ parentNodes.innerText;
}
    else
    alert("request rejected!")
    console.log('DOM JAVAscript')
}
for( elm of document.querySelectorAll('*')){
    setTimeout(() => { color() }, 1000);
}
function color(){
    alert(elm);
}
welcome();
//window.welcome();
