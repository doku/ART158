
function setup(){
  createCanvas(640,480);
  background(255);
  x = width/2;
  y = height/2;


}
var noiseXStep = 0.01;
var noiseYStep = 100.01;

function draw(){
  noiseXStep += 0.01;
  noiseYStep += 0.01;
  x = x + noise(noiseXStep);
  y = y + noise(noiseYStep);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  noStroke();
  fill('rgba(0,0,0,.1)');
  ellipse(x, y, 5, 5);
}
