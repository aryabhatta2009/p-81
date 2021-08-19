canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath(); 
ctx.strokeStyle="blue"; 
ctx.lineWidth = 5; 
ctx.arc(200,200,40,0,2*Math.PI); 
ctx.stroke();
 
ctx.beginPath(); 
ctx.strokeStyle="red"; 
ctx.lineWidth = 5; 
ctx.arc(300,200,40,0,2*Math.PI); 
ctx.stroke(); 