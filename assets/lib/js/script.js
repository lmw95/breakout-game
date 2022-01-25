var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// Draws the ball on canvas
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#C7DD3A";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);


// Coordinate variables
var x = canvas.width/2;
var y = canvas.height-30;

