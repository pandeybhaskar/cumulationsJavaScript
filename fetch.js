fetch("https://reqres.in/api/users", {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'My USER 1',
        id:19

    })
})
.then(res =>{
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("error"))

 
