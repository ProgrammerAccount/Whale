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
       const v= positionBall.speed;
       const t = positionBall.flightTime;
       const alfa = positionBall.kat;
       const y=150-(v*t*Math.sin(alfa)-(9,81*t*t)/2);
       let x=650- v*t*Math.cos(alfa) ;
              if(x>650) x=650- (v*t*Math.cos(alfa))*-1;

       positionBall.x=x;
       positionBall.y=y;
       console.log(y)
;       ctx.translate( x,y);
       ctx.arc(0,0,20,0,2*Math.PI);
       ctx.fill();  
       ctx.stroke();
       ctx.restore();
}
    
