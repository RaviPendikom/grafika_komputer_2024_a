function setup() {
  createCanvas(600, 600);
  background(49, 21, 80);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  circle(random(600), random(600), random(200));
  frameRate(24);
}
