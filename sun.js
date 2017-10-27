/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global ctx */


function drawSun()
{
    ctx.clearRect(400,0,800,200);
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle="#eef442";
    ctx.translate(650,150);
    ctx.arc(0,0,80,0,2*Math.PI);
    
    ctx.fill();
    drawRays();
        ctx.beginPath();

    ctx.arc(0,0,40,0,Math.PI);
    ctx.strokeStyle="#000";
    ctx.stroke();
    ctx.restore();
    
}
function drawRays()
{
    ctx.strokeStyle="#eef442";
    ctx.beginPath();
    
    ctx.lineWidth=3; 
    for(var i=1;i<=18;i++)
    {

    ctx.moveTo(0,0);
    ctx.rotate(i*Math.PI/9);
    ctx.lineTo(0,120);
    ctx.stroke();
    ctx.rotate(-1*(i*Math.PI/9));
    }

}


