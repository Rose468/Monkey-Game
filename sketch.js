
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  //Creating monkey
  monkey  = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale =0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.x)
  
  score = 0;
}


function draw() {
background(255)

  //Ground and monkey jump
  if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  if(keyWentDown("space") && monkey.y>= 314.3){
     monkey.velocityY = -16

  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  //console.log(monkey.y)
 // ground.visible = false;
  
 //Score
  textSize(15);
  fill("black");
  text("Score:" + score,10,20);
 
  
  //Survival Time
  textSize(20);
  fill("green");
  text("SurvivalTime:"+ survivalTime,260,20)
  survivalTime = Math.ceil(frameCount/frameRate())
  //console.log(survivalTime)
  
  
 FoodGroup = new Group();
 obstaclesGroup = new Group();
  
  
  
  
  Bananas();
  Rocks();
   drawSprites() ;
}

function Bananas(){
  
  if(frameCount% 80 ==0){
  
  banana = createSprite(600,210,10,40);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -4;
  banana.lifetime = 130;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  FoodGroup.add(banana);
  
   }
  }

function Rocks(){
  
  if(frameCount%300 ==0){
    obstacles = createSprite(600,315,10,40);
    obstacles.velocityX = -3;
    obstacles.lifetime = 170;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2
  }
}

