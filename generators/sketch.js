

/*
A star created by a rect with another rect centered on the same position with the second rect rotated at a random angle
Two rectangle centered and overlap on each other, with one rectangle rotated. 
Each rectangle has 10% opacity. 
Each shape should overlap.
Fill 80% of canvas with shapes

*/
function setup(){
    createCanvas(800,600);
    var vect = createVector(0,0);
    var vect2 = createVector();
    var length = 25; 
    var lines = [];
    var ggg = 0;
    
    
    for(var i = 0; i < 150; i++){
        
        var posx = random(0, 800);
        var posy = random(0, 600);
        var rand = random(20,100);
        
        var randAngle = random(0, 360);
        fill(23,32,23, 255/10);
        
        rectMode(CENTER);
        push();
        //rect(0,0, rand, rand );
        translate(posx, posy);
        rotate(radians(randAngle));
        
        rect(0,0, rand, rand );
        pop();
        push();
        //rect(posx, posy, rand, rand);
        translate(posx, posy);
        rotate(radians(randAngle + 45));
        rect(0, 0 , rand, rand);
        pop();
        
        //pop();
        
    }

}


function draw(){
    //rect(0,0, 25, 25);
    /*
    for(var i = 0; i < 50; i++){
        if()
        var posx = random(0, 800);
        var posy = random(0, 600);
        var rand = random(20,30);
        
        fill(23,32,23, 255/10);
        rect(posx, posy, rand, rand );
        rect(posx, posy, rand, rand);
        
        
    }*/

}