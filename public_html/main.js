/* global drawWave */
var positionBall={
    'flightTime':0 ,
    'speed':150,
    'kat': 0,
    'x':0,
    'y':0
};
var pointDetected=false;
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


   if (e.keyCode == '37') {
      xWhale=xWhale-5;
      directionLeft=false;
    }
    else if (e.keyCode == '39') {
      xWhale=xWhale+5;
      directionLeft=true;
    }
//asd
}
positionBall.kat= Math.random()*360;
var canvas = document.getElementById("blue");
var ctx= canvas.getContext("2d");
var x1=-400,x2=0,x3=400,x4=-800;
ctx.font = "30px Arial";

var i=0;
var a=0;
var bool=false;
var number;
var time=0;
var xWhale=canvas.width/2;
var yWhale=canvas.height/2+168;
var point=0;
function draw()
{
    time++;
    positionBall.flightTime=(time*10)/1000;
    //console.log(positionBall.flightTime);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    i=i+0.1;
    
    drawWhale(a);
    drawWave();
    drawSun();
    moveBall();
    
    if(Math.round(a)===6)bool=true;
    if(Math.round(a)===-6)bool=false;
    if(bool===false)a=a+0.05;
    else a=a-0.05;
  if(positionBall.y>600)
  {
      positionBall.flightTime=0;
      time=0;
      positionBall.kat= Math.random()*180+180;
      pointDetected=false;
  }
  if(positionBall.y>420)
  if(positionBall.x-xWhale<140&&positionBall.x-xWhale>-140&&pointDetected==false)
      {
          pointDetected=true;
          point++;
      }
  ctx.fillText(point,10,50);
}

setInterval(draw,10);
//draw();
