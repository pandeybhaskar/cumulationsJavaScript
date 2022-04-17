var Cnvs = document.getElementById("myCnvs");
var cntx = Cnvs.getContext("2d");

function rectangle(){
cntx.fillStyle='red';
cntx.strokeRect(10,10,80,60);
}
function circle(){
cntx.beginPath();
cntx.arc(150,150,100,0,2*Math.PI);
cntx.stroke();
}
function linearGradient(){
var grd = cntx.createLinearGradient(0,0,200,0);
grd.addColorStop(0.5,"red");
cntx.fillStyle = grd;
cntx.fillRect(10,10,80,60);
}
function radialGradient(){
    var rdGrd = cntx.createRadialGradient(100,100,80,130,130,100);
    rdGrd.addColorStop(1,'green');
    cntx.fillStyle = rdGrd;
    cntx.fillRect(20,20,80,80);
}
function text(){
    cntx.font = "30px Arial";
    cntx.fillStyle = "blue";
    cntx.fillText("Hello World", 60,150);
    cntx.strokeText("Hello World", 70,190);
}
rectangle();
circle();
linearGradient();
radialGradient();
text();