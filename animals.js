let animalContainer= document.getElementById("animalInfo");
let animals= document.getElementById('animalId')
animals.addEventListener('click',function(){
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload= function (){
        //console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
       // console.log(ourData[0]);
        renderHtml(ourData);
    };
    ourRequest.send();    
});       

 function renderHtml(data){
     var elm= "";
   //  animalContainer.insertAdjacentElement('beforeend', elm);
   for(let i=0; i<data.length;i++)
   elm+="<p>"+data[i]+".</p>"; 
 }