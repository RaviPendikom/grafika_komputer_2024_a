let x = 300;
let y = 300;
let speedX = 5;
let speedY = 8;
function setup() {
  createCanvas(600, 600);
  background(49, 21, 80);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  circle(x, y, random(50));
  x += speedX;
  y += speedY;
  if (x + 50 >= width || x - 50 <= 0) {
    speedX *= -1;
  }
  if (y + 50 >= width || y - 50 <= 0) {
    speedY *= -1;
  }
}
