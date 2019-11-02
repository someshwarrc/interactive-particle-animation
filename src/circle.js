let colors = ["#dcffcc", "#9fdfcd", "#baabda", "#d79abc"];
let mouse = {};

window.addEventListener("mousemove", event => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("mouseout", () => {
  mouse.x = window.innerWidth/2;
  mouse.y = window.innerHeight/2;
})

export default class Circle {
  constructor(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = r;
    this.minRadius = r;
    this.color = colors[Math.floor(Math.random() * 4)];
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;

    //interactivity

    if (
      Math.abs(this.x - mouse.x) <= 50 &&
      Math.abs(this.y - mouse.y) <= 50 &&
      this.radius <= 30
    ) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw(ctx);
  }
}
