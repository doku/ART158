
var vLocation;
var vSpeed;

function setup(){
  createCanvas(800, 600);
  background(255);
  
  vLocation = createVector(100,100);
  vSpeed = createVector(1,3.3);
}


function draw(){
  background(255);
  //ellipse(vLocation.x, vLocation.y,80,80);
  textSize(32);
  text("$", 10,50);
  fill()
  
  vLocation.add(vSpeed);
  ellipse(vLocation.x, vLocation.y,30,30);
  
  if((vLocation.x > width) || (vLocacation.x < 0)){
    vSpeed.x = vSpeed.x * -1;
  }
  if((vlocation.y > height) || (vLocation.y < 0)){
    vSpeed.y = vSpeed.y * -1;
  
  }



}

