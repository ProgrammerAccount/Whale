/* global drawWave */
var positionBall={
    'flightTime':0 ,
    'speed':150,
    'kat': 0,
    'x':0,
    'y':0
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


   if (e.keyCode == '37') {
      xWhale=xWhale-5;
    }
    else if (e.keyCode == '39') {
      xWhale=xWhale+5;
    }
//asd
}
positionBall.kat= Math.random()*90;
var canvas = document.getElementById("blue");
var ctx= canvas.getContext("2d");
var x1=-400,x2=0,x3=400,x4=-800;
var i=0;
var a=0;
var bool=false;
var number;
var time=0;
var xWhale=canvas.width/2;
var yWhale=canvas.height/2+168;
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
  }
  
}

setInterval(draw,10);
//draw();
