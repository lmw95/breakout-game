var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// Draws the ball on canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#C7DD3A";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}

setInterval(draw, 10);


// Coordinate variables
var x = canvas.width/2;
var y = canvas.height-30;


// Coordinates to make ball move
var dx = 2;
var dy = -2;



