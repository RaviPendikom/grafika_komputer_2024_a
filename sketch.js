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

  if (x - size / 2 > width) {
    x = 0;
  } else if (x + size / 2 < 0) {
    x = 600;
  }
  if (y - size / 2 > height) {
    y = 0;
  } else if (y + size / 2 < 0) {
    y = 600;
  }

  circle(x, y, size);
}
