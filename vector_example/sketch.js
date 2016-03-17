
var vLocation;
var vSpeed;

function setup(){
  createCanvas(800, 600);
  background(255);
  
  vLocation = createVector(100,100);
  vSpeed = createVector(1,3.3);
}


function draw(){
  ellipse(50,50,80,80);
  
  vLocation.add(vSpeed);
  




}

