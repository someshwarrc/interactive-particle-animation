import Circle from "./circle.js";

const canvas = document.getElementById("my-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ctx = canvas.getContext("2d");

let circle = [];

for (let i = 0; i < 400; i++) {
  let r = 1 + Math.random() * 9,
    x = Math.random() * (window.innerWidth - r * 2),
    y = Math.random() * (window.innerHeight - r * 2),
    dx = Math.random() * 3 - 2.5,
    dy = Math.random() * 3 - 2.5;
  circle[i] = new Circle(x, y, dx, dy, r);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circle.forEach(circle => {
    circle.update(ctx);
  });
}

animate();
