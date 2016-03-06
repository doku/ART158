
function setup(){
  createCanvas(640,480);
  background(0);
  x = width/2;
  y = height/2;


}
var noiseXStep = 0.01;
var noiseYStep = 0.01;

function draw(){
  noiseXStep += 0.01;
  noiseYStep += 0.01;
  x = noise(noiseXStep);
  y = noise(noiseYStep);
  noStroke();
  fill('rgba(0,0,0,.1)');
  ellipse(x, y, 5, 5);
}
