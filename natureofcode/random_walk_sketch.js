
var x = 250;
var y = 200;
var randx;
var randy;



function setup() {
  createCanvas(640, 480);
  background(255);
  //frameRate(1);
  x = width/2;
  y = height/2;
}

function draw() {
  randx = randomGaussian(0, 5);
  randy = randomGaussian(0, 5);
  x = x + randx;
  y = y + randy;
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  
  noStroke();
  fill('rgba(0,0,0,.1)');
  ellipse(x, y, 5, 5);
}
