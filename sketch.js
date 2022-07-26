var john,johnWalk,johnImg,johnDead;
var ground;
var enemyRun;
var trofeu,trofeuImg,backGround;

function preload(){
  johnImg = loadAnimation("./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_000.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_001.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_002.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_003.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_004.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_005.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_006.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_007.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_008.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_009.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_010.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_011.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_012.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_013.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/IdleBlinking/0_Reaper_Man_Idle Blinking_014.png",);
  
  johnWalk = loadAnimation("./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_000.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_001.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_002.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_003.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_004.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_005.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_006.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_007.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_008.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_009.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_010.png",
  "./assets/Reaper_Man_2/PNG/PNGSequences/Running/0_Reaper_Man_Running_011.png");
  
  johnDead = loadImage("./assets/Reaper_Man_2/PNG/PNGSequences/Dying/0_Reaper_Man_Dying_000.png");

  enemyRun = loadAnimation("./assets/Running/0_Reaper_Man_Running_000.png",
  "./assets/Running/0_Reaper_Man_Running_001.png",
  "./assets/Running/0_Reaper_Man_Running_002.png",
  "./assets/Running/0_Reaper_Man_Running_003.png",
  "./assets/Running/0_Reaper_Man_Running_004.png",
  "./assets/Running/0_Reaper_Man_Running_005.png",
  "./assets/Running/0_Reaper_Man_Running_006.png",
  "./assets/Running/0_Reaper_Man_Running_007.png",
  "./assets/Running/0_Reaper_Man_Running_008.png",
  "./assets/Running/0_Reaper_Man_Running_009.png",
  "./assets/Running/0_Reaper_Man_Running_010.png",
  "./assets/Running/0_Reaper_Man_Running_011.png")

  backGround = loadImage("./assets/game_background_3.png");

  trofeuImg = loadImage("./assets/16.png")
}

function setup(){
  createCanvas(600,600);

  john = createSprite(300,50)
  john.addAnimation("idle", johnImg);
  john.addImage(johnDead);
  john.addAnimation("walk", johnWalk);
  john.scale = 0.1

  trofeu = createSprite(random(50,550),random(300,550));
  trofeu.shapeColor = "yellow";
  trofeu.addImage(trofeuImg);
  trofeu.scale = 0.2
}

function draw(){
  background(backGround);

  if(keyDown(UP_ARROW)){
    john.y -= 10;
  }
  if(keyDown(DOWN_ARROW)){
    john.y += 10;
    john.changeAnimation("walk");
  }
  if(keyDown(RIGHT_ARROW)){
    john.x += 10;
    john.changeAnimation("walk");
  }
  if(keyDown(LEFT_ARROW)){
    john.x -= 10;
    john.changeAnimation("walk");
  }
 
  createEnemies();

  drawSprites();

}


function createEnemies(){
  if(frameCount % 120 === 0){
    var enemy = createSprite(100,100)
    enemy.addAnimation("run", enemyRun);
    enemy.scale = 0.1;
    enemy.x = Math.round(random(1,600));
    enemy.velocityX = 3
    enemy.y = Math.round(random(1,600));
  }
}

