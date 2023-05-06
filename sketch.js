var bg,bgImg;
var shooter, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_1.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

  shooter = createSprite(displayWidth-1150,displayHeight-300,50,50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.3;
  shooter.debug = true;
  shooter.setCollider("rectangle",0,0,300,300);

}

function draw() {

  if(keyDown("UP_ARROW")) {
    shooter.y = shooter.y - 30;
  }
  if(keyDown("DOWN_ARROW")) {
    shooter.y = shooter.y + 30;
  }

  if(keyWentDown("space")) {
    shooter.addImage(shooter_shooting);
  }
  else if(keyWentUp("space")) {
    shooter.addImage(shooterImg);
  }

  drawSprites()
}
