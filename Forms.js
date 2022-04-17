let fname, lname, email, gender, dob, check;
function submitPress(){
    check = document.getElementById("check");

    if(check.checked==true){
    console.log("Submitted");
    fname = document.querySelector("#fname");
    lname = document.querySelector("#lname");
    email = document.querySelector("#email");
    gender = document.querySelector("#gender");
    dob = document.querySelector('input[type="date"]');

    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    console.log(gender.value);
    console.log(dob.value);
}
else{
    console.log("Tick the Box");
}
}