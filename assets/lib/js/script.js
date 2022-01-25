var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// Draws the ball on canvas
function draw() {

}

setInterval(draw, 10);


// Ball drawing
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#1ECB9E";
ctx.fill();
ctx.closePath();


// Coordinate variables
var x = canvas.width/2;
var y = canvas.height-30;

