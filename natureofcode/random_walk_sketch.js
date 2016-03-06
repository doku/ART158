
var x = 0;
var y = 0;
var randx;
var randy;



function setup() {
  createCanvas(640, 480);

}

function draw() {
  randx = randomGaussian(0, 10);
  randy = randomGaussian(0,10);
  x = x + randx;
  y = y + randy;
  
  noStroke();
  fill(255,10);
  ellipse(x, y, 5, 5);
}
