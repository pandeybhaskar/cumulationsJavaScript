url = "https://reqres.in/api/users";
function fetchPost1(){
    fetch(url,{mode:'no-cors'})
    .then(res=>document.getElementById('para').innerHTML = res)
}

function fetchPost2(){
    fetch(url)
    .then(res=>document.getElementById('para').innerHTML = console.log(res))
   // .then(document.getElementById('para1').innerHTML = "para 1")
    .then(res2=>document.getElementById('para2').innerHTML = res2)
}
function fetchPost3(){
    fetch(url,{method:'GET',mode:'cors'})
    .then(res=>{ document.getElementById('para').innerHTML = res.json()
   // .then(data=>{ document.getElementById('para1').innerHTML = data
   .then(data=>{ document.getElementById('para1').innerHTML = JSON.stringify(data)
   console.log(data)
})})
}
fetchPost1();
//fetchPost2();
//fetchPost3();