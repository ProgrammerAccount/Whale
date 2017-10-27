/* global ctx, positionBall */

function drawBall()
{
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle="#000000";
    ctx.translate(650,150);
    ctx.arc(0,0,20,0,2*Math.PI);
    ctx.fill();  
    ctx.stroke();
    ctx.restore();
}
function updatePosition()
{
    
}
function moveBall()
{ 
       ctx.save();
       ctx.beginPath();
       // var xofBall=(positionBall.speed*positionBall.speed*Math.sin(positionBall.kat*2))/10+650;
      // const yofBall=(positionBall.speed*positionBall.flightTime*Math.sin(positionBall.kat)-5*positionBall.flightTime*positionBall.flightTime)+150;
       //const xofBall= positionBall.speed*positionBall.flightTime*Math.cos(positionBall.kat)*1000+650;
       const v= positionBall.speed;
       const t = positionBall.flightTime;
       const alfa = positionBall.kat;
       const y=150-(v*t*Math.sin(alfa)-(9,81*t*t)/2);
       const x=650- v*t*Math.cos(alfa) ;
       positionBall.x=x;
       positionBall.y=y;
       console.log(y)
;       ctx.translate( x,y);
       ctx.arc(0,0,20,0,2*Math.PI);
       ctx.fill();  
       ctx.stroke();
       ctx.restore();
}
    
