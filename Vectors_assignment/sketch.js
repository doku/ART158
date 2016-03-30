


var vLocation;
var vSpeed;

var noiseVal;

var xoff = 0.0;
var k = 0.0;

function setup(){
  createCanvas(800, 600);
  background(255);
  
  vLocation = createVector(100,100);
  vSpeed = createVector(1,3.3);
  
  /*
   for (var y = 0; y < height; y++) {
     for (var x = 0; x < width; x++) {
       noiseDetail(2,0.2);
       noiseVal = noise(x * 0.008,
                        y * 0.008);
       stroke(noiseVal*255);
       point(x,y);
     }
    }
    */
  
  
}


function draw(){
  //background(255);
  //ellipse(vLocation.x, vLocation.y,80,80);
  //textSize(120);
  //text("$", 100,200);
  //fill(0,102, 153);
  xoff = xoff + 0.05;
  for(var i = 0; i < width; i += 1){
      //xoff + i*0.0001;
      var n = noise(xoff + i * 0.01);
      beginShape();
      vertex(i, height-(n*sin(-.5 + i*.004)*100));
      //xoff = xoff + (i+1)*0.0001;
      n = noise(xoff + (i+1) * 0.01);
      vertex(i+1, height-(n*sin(-.5 + i*0.004)*100));
      vertex(i+1, height);
      vertex(i,height);
      fill(136,122,89);
      endShape();
  }
  


  for(var i = 0; i < 32; i++){
      stroke(0);
      strokeWeight(0);
      if(keyIsPressed === false){
          if(i % 2 == 0){
            fill(136,122,89, 150);
          }else{
              fill(234,222,204, 150);
          }
      }else{
          if(i % 2 == 0){
            fill(136,122,89, 150);
          }else{
              fill(169, 42,35, 150);
          }
          
          
      }
      arc(width/6,height,2000,2000,PI+ i*PI/32,PI + (i+1)*PI/32, PIE);
      if(i%2 == 0){
          fill(234,222,204, 100);
          arc(width/6, height, 2000,2000, PI + i*PI/32 + PI/256, PI + i*PI/32 + 3 * PI/512, PIE);
          fill(234,222,204, 100);
          arc(width/6, height, 2000,2000, PI + (i+1)*PI/32 - 3* PI/512, PI + (i+1)*PI/32 - 2* PI/512, PIE);
      }
    }
    
    if(keyIsPressed === true){
        k += 0.05;
        push();
        translate(width/6, height);
        rotate(3.1415926*k);
        //var n = noise(xoff);
        v = createVector(100,100);
        //for(var i = 0; i< 360; i++){
        //   v = p5.Vector.fromAngle(radians(i));
        //    v.mult(10);
            //v.mult(1.5 + noise(xoff + i * 0.01));
            rectMode(CENTER);
            rect(0,0, v.x, v.y);
            //stroke(0);
        //}
        //line(0,0, )
        
        pop();
    }

/*
    if(keyIsPressed === true){
    k += 0.1;
    push();
    //rect(5,5,20,20);
    translate(width/2, height/2);
    rotate(3.1415926*k);
    rectMode(CENTER);
    rect(0,0,30,30);
    fill(255,255,255, 200);
    pop();
    
      
  }
  */
      
  //fill(0,102,153);
  /*
    for (var y = 0; y < height; y++) {
     for (var x = 0; x < width; x++) {
       noiseDetail(2,0.2);
       noiseVal = noise((100) * 0.02,
                        (233) * 0.02);
       stroke(noiseVal*255);
       point(x,y);
     }
    }
   */
  
  vLocation.add(vSpeed);
  //ellipse(vLocation.x, vLocation.y,30,30);
  
  if((vLocation.x > width) || (vLocation.x < 0)){
    vSpeed.x = vSpeed.x * -1;
  }
  if((vLocation.y > height) || (vLocation.y < 0)){
    vSpeed.y = vSpeed.y * -1;
  
  }



}

