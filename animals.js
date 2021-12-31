let animalContainer= document.getElementById("animalInfo");
let animals= document.getElementById('animalId')
var ourData,data;
let ourRequest;
animals.addEventListener('click',function(){
    ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload= function (){
        //console.log(ourRequest.responseText);
        ourData = JSON.parse(ourRequest.responseText);
        //console.log(typeof ourData);
        renderHtml(ourData);
    };
    ourRequest.send();    
});       
 
 function renderHtml(data){
     let testHtml="Test123";
     let output= Object.values(data);
     for(let i=0;i<output.length;i++){
     animalContainer.insertAdjacentHTML("beforeend",output[i].name+" is a "+output[i].species+"<br>");
     console.log(output[i].name+" is a "+output[i].species);
     alert(output.length)
    }
 }
