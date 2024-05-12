let canvas = document.getElementById("main-canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

x = canvas.width / 2;
y = canvas.height / 2;

vx = 9;
vy = 9;

radius = canvas.height / 10;

// We indicate direction using 1 and -1.
directionY = 1;
directionX = 1;

function animate() {
	
	requestAnimationFrame(animate);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = 2;

	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	
	ctx.stroke();
	ctx.closePath();
	
	if (y >= (canvas.height - radius) || y <= radius) {
		directionY = -directionY;
	}
	if (x >= (canvas.width - radius) || x <= radius) {
		directionX = -directionX;
	}
	
	x += vx * directionX;
	y += vy * directionY;
}

animate();
