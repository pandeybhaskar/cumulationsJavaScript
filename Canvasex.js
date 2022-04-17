var myCnvs = document.querySelector("canvas");
var ctx = myCnvs.getContext("2d");
function rectangle(){
 ctx.fillStyle = 'rgba(0,100,90,0.5)';
 ctx.fillRect(10,10,100,80);
}
function circle(){
    var grd = ctx.createRadialGradient(200,200,30,100,100,20);
     grd.addColorStop(0, 'red');
     grd.addColorStop(1,'white');
     ctx.arc(170,120,30,0,2*Math.PI);
     ctx.fillStyle = "white"
     ctx.fill();
 //   ctx.fillRect(170,10,100,80);

}
function text(){
    ctx.font = "30px Arial";
    ctx.fillStyle = 'pink';
    ctx.fillText('Hello World',130,30);
     ctx.strokeText('Hello World',130,80);

}
 rectangle();
circle();
text();