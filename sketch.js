var r;
var r2;
var  r3;
var r4;
var r5;
var r6;
var r7;
var r8;
var r9;
var r10;
var canvas;



function setup(){
   
canvas = createCanvas(550,500);

r = createSprite(50, 100, 5, 20);
r.shapeColor = "blue";


r2 = createSprite(100, 100, 5, 20);
r2.shapeColor = "blue";


r3= createSprite(150, 100, 5, 20);
r3.shapeColor = "blue";


r4 = createSprite(200, 100, 5, 20);
r4.shapeColor = "blue";


r5 = createSprite(250, 100, 5, 20);
r5.shapeColor = "blue";


r6 = createSprite(300, 100, 5, 20);
r6.shapeColor = "blue";


r7 = createSprite(350, 100, 5, 20);
r7.shapeColor = "blue";


r8 = createSprite(400, 100, 5, 20);
r8.shapeColor = "blue";


r9 = createSprite(450, 100, 5, 20);
r9.shapeColor = "blue";


r10 = createSprite(500, 100, 5, 20);
r10.shapeColor = "blue";


}

function draw(){
  background("cyan");
    
    drawSprites();

    r.velocityY = 4;
    r2.velocityY = 5;
    r3.velocityY = 8;
    r4.velocityY = 7;
    r5.velocityY = 6;
    r6.velocityY = 3;
    r7.velocityY = 9;
    r8.velocityY = 6;
    r9.velocityY = 5;
    r10.velocityY = 8;

    if (r.y > 500) {
 
        r.y = 0;
    
        
    }
    if (r2.y > 500) {
 
        r2.y = 0;
    
        
    }
    if (r3.y > 500) {
 
        r3.y = 0;
    
        
    }
    if (r4.y > 500) {
 
        r4.y = 0;
    
        
    }
    if (r5.y > 500) {
 
        r5.y = 0;
    
        
    }
    if (r6.y > 500) {
 
        r6.y = 0;
    
        
    }
    if (r7.y > 500) {
 
        r7.y = 0;
    
        
    }
    if (r8.y > 500) {
 
        r8.y = 0;
    
        
    }
    if (r9.y > 500) {
 
        r9.y = 0;
    
        
    }
    if (r10.y > 500) {
 
        r10.y = 0;
    
        
    }
   

}

