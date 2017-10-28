/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*global ctx, canvas, context, angle*/
var angle=0;
var directionLeft=false;
function drawEye(bool)
{
    var width=-85;
    if(directionLeft) width=85;
    
    if(bool)
    {
    ctx.save();
    ctx.moveTo(width,-20);
    ctx.fillStyle="#ffffff";
    ctx.arc(width ,-20,16,0,Math.PI);  
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="#000000";
    ctx.moveTo(width,-20);
    ctx.arc(width ,-20,8,0,Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    }
    else // wyswietl połowe (mrugnięte ) oko
    {
    ctx.save();
    ctx.moveTo(width,-20);
    ctx.fillStyle="#ffffff";
    ctx.arc(width ,-20,16,0,Math.PI*2); // kąt podany w radiantach  
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="#000000";
    ctx.moveTo(width,-20);
    ctx.arc(width,-20,8,0,Math.PI*2);// kąt podany w radiantach 
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    }
}
function drawWhale(angle)
{
 
    var img=document.getElementById("whaleDL");  
       if(directionLeft===true) img=document.getElementById("whaleDR");  
    ctx.save();
    ctx.translate(xWhale,yWhale);
    ctx.rotate(angle*Math.PI/180);    
    ctx.drawImage(img,-img.width/2,-img.height/2,300,300);
    if(angle>0)
    drawEye(true);
    else drawEye(false); 
    ctx.restore();  
}
function moveWhale(e)
{
    
       if (e.keyCode == '37') {
        xWhale=xWhale+10;
        
    }
    else if (e.keyCode == '39') {
       xWhale=xWhale-10;
        directionLeft=true;
    }
}


