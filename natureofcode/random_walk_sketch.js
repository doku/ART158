
var x = 250;
var y = 200;
var randx;
var randy;



function setup() {
  createCanvas(640, 480);
  background(0);
  //frameRate(1);
  x = width/2;
  y = height/2;
}

function draw() {
  randx = randomGaussian(0, 10);
  randy = randomGaussian(0, 10);
  x = x + randx;
  y = y + randy;
  console.log(mouseX);
  console.log(mouseY);
  //noStroke();
  fill(50);
  ellipse(x, y, 5, 5);
}
