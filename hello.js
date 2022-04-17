pressOb = document.getElementById("press");
blbOb = document.getElementById("blb");
pressOb.style.color="red";
pressOb.style.backgroundColor="pink"
// img bulb-  

blbOb.style.height='300px';
blbOb.style.width='400px';

  //..............2. when mouse is over the bulb image, expands
function over()
{
   // alert("bulb is on..remove pointer from it! ");
    blbOb.style.height= "500px";
    blbOb.style.width= "600px";
    setTimeout(out,5000);
}
     //........3. when mouse is out of bulb image, back to original
function out(){
    blbOb.style.height='300px';
blbOb.style.width='400px';
}