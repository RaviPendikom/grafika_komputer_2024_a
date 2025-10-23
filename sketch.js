let x = 300;
let y = 300;
let speedX = 5;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(49, 21, 80);
  noStroke();
  circle(x, y, 100);
  x += speedX;
  if (x + 50 >= width) {
    speedX *= -1;
  }
}
