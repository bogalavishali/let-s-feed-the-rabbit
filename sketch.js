var garden,rabbit,apple;
var gardenImg,rabbitImg;
var appleImg;


var score;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit sprite
rabbit = createSprite(180,450,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



var rand =  Math.round(random(1,2));
//console.log(rand)


console.log(rabbit.depth);

}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  if (keyDown("right") ) {
    rabbit.x = rabbit.x+3;
  }

  if (keyDown("left") ) {
    rabbit.x = rabbit.x-3;
  }

//function to spawn apples
 spawnApples() 

  drawSprites();
}
function spawnApples(){
  //write your code here


  if (frameCount % 80 == 0) {

 apple = createSprite(random(50,350),40,10,10);
 apple.addImage(appleImg);
 apple.scale = 0.05;
 apple.velocityY = 2;
 
 // console.log(frameCount);
console.log(rabbit.depth);
rabbit.depth = apple.depth;
apple.depth = apple.depth ;

 
}
    }
  
  

    


 

  
  
































