x = 300;
y = 300;
size = 80;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(89, 180, 78);
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      y -= 4;
    } else if (keyCode === DOWN_ARROW) {
      y += 4;
    } else if (keyCode === LEFT_ARROW) {
      x -= 4;
    } else if (keyCode === RIGHT_ARROW) {
      x += 4;
    }
  }
  circle(x, y, size);
}
