var boy


function preload(){
  runningAni=loadAnimation("leg1.png","leg2.png","leg3.png","leg4.png","leg5.png","leg6.png","leg7.png","leg8.png")
  bgImage=loadImage("bluebg.jpeg")
  groundImg=loadImage("ground.png")
  sunImg=loadImage("sun.png")
  hurdleImg=loadImage("hurdle1.png")
}


function setup() {

  createCanvas(800,400);
  ground=createSprite(400,360,50,50)
  ground.addImage("grou",groundImg)
  ground.scale=0.5
  ground.velocityX=-5


   boy= createSprite(100,300, 50, 50);
 boy.addAnimation("running",runningAni)

sun=createSprite(700,80,20,20)
sun.addImage("suni",sunImg)
sun.scale=0.3


 invisibleGround=createSprite(400,370,800,5)
 invisibleGround.visible=false


}

function draw() {
  background(bgImage);  
  boy.collide(invisibleGround)
  
  if(ground.x<170){
    ground.x=400
  }
  
  if(keyDown("space")){
    boy.velocityY-=4
  }
  boy.velocityY+=1
  spawnHurdles()
 
 
  drawSprites();
  
}

function spawnHurdles(){
  if(frameCount % 130===0){
   var hurdle=createSprite(width-100,320,25,25)
    hurdle.addImage("hud",hurdleImg)
    hurdle.scale=0.3
    hurdle.velocityX=-4
  }
 
}