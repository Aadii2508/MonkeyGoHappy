var gameState;
PLAY = 0;
END = 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup,obstacleGroup;
var ground;
var score;

function preload(){
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400, 400);
  
  monkey = createSprite(50, 300, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 350, 400, 10);
  ground.velocityX = -4;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

  score = 0;
}


function draw() {
background("white");
   text("Score: "+ score, 300,50);
   score = score + Math.round(getFrameRate()/60);
  
  monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+ 0.8;
  
  
  if(ground.x> 0){
    ground.x = ground.width/2;
  }
  
  if(score/100 === 1){
    monkey.scale = monkey.scale+ 0.05;
  }
  
 
    
fruit();  
Obstacle();
drawSprites();
}

function fruit(){
  bananaGroup = createGroup();
  
  if(World.frameCount%200===0){
    banana = createSprite(400, 300, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(210, 240));
    banana.velocityX = -8;
    banana.setLifetime = 100;
    
    if(monkey.isTouching(banana)){
    monkey.scale = monkey.scale + 0.025;
    bananaGroup.setLifetimeEach = 0;
  }
    
    bananaGroup.add(banana);
  }
}

function Obstacle(){
  obstacleGroup = createGroup();
  
  if(World.frameCount%200===0){
  obstacle = createSprite(400, 300, 20, 20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;  
  obstacle.y = Math.round(random(310,315));
  obstacle.velocityX = -8;
  obstacle.setLifetime = 100;
    
  obstacleGroup.add(obstacle);  
    
  }
}