size = 50;

function setup() {
  createCanvas(600, 600);
  background(89, 180, 78);
}

function draw() {
  circle(300, 300, size);
  if (mouseIsPressed) {
    size += 2;
  }
}
