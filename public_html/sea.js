/* global ctx, canvas */

function wave(startX)
{
ctx.moveTo(startX,650);
ctx.quadraticCurveTo(startX+400,400,startX+800,650);

}
function drawWave()
{
ctx.closePath();
ctx.beginPath();

x1++;
x2++;
x3++;
x4++;
if(x1<800) wave(x1);
	else x1=-800;
if(x2<800)	wave(x2);
	else x2=-800;
if(x3<800) wave(x3);
	else x3=-800;
if(x4<800) wave(x4);
	else x4=-800;
ctx.fillStyle="#4189f4";
ctx.fill();




}
