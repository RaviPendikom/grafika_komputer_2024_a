// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(600, 600);
  background(89, 180, 78);
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  rectMode(CENTER);
  square(mouseX, mouseY, 100);
}
