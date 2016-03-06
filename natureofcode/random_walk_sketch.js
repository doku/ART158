function setup() {
  createCanvas(640, 480);
  var x = 0;
  var y = 0;
  var randx;
  var randy;
}

function draw() {
  randx = randomGaussian(0, 10);
  x = x + randx;
  y = y + randy;
  ellipse(x, y, 5, 5);
}
