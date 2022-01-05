let submit= document.getElementById("submit");
let date= document.getElementById("date");
let jsonData= document.getElementById("jsonData");
let xhttp,jsnDta;
submit.addEventListener("click", submitFunc);
function submitFunc(){
    let usrnm= document.getElementById("usrnm").value;
let pass= document.getElementById("pass").value;
    if(usrnm=="t" && pass=="d")
    location.href="page1.html"
    else
    alert("Wrong Credentials")
}

date.addEventListener("click",dateFunc);
function dateFunc(){
   let dt= new Date();
   document.getElementById("datePara").innerHTML= dt;
}

jsonData.addEventListener("click",jsonFunc);
function jsonFunc(){
    xhttp= new XMLHttpRequest();
    xhttp.open('GET','https://reqres.in/api/users')
    xhttp.onload=()=>{
    jsnDta= JSON.parse(xhttp.responseText);
    document.getElementById("jsnPara").innerHTML= jsnDta;
    console.log(Object.values(jsnDta))
}
    xhttp.send();
}