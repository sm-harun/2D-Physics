"use strict";
let canvas = document.querySelector("#main-canvas");
let ctx = canvas.getContext("2d");
if (!ctx)
    throw new Error("Couldn't get context");
resize();
window.addEventListener("resize", resize);
let x = canvas.width / 2;
let y = canvas.height / 2;
let vx = 8;
let vy = 6;
let ay = 0.3;
let radius = 100;
let radiusChange = 2;
function resize() {
    canvas.width = window.innerWidth || 500;
    canvas.height = window.innerHeight || 500;
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y, radius);
    if (x <= 0 || x >= canvas.width)
        vx = -vx;
    if (y <= 0 || y >= canvas.height)
        vy = -vy;
    x += vx;
    y += vy;
    if (radius <= 50 || radius >= 200)
        radiusChange = -radiusChange;
    radius += radiusChange;
    requestAnimationFrame(loop);
}
loop();
function drawCircle(xCord, yCord, r) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.arc(xCord, yCord, r, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
}
