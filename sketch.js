var path,boy,cash,diamonds,jwellery,sword,end,nail;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg,nailImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,nailG;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var treasureTroupe = 0;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  nailImg = loadImage("obstacle3.png");
}

function setup(){
  
  createCanvas(450,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = (4 + treasureTroupe/1000);


//creating boy running
boy = createSprite(300,330,30,30);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
end = createSprite(200,200,20,20);
end.addAnimation("GameOver",endImg);
end.scale = 0.5;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
nailG = new Group();
}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  if(gameState === PLAY){
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createNail();
    end.visible = false;
  }
  else if(gameState === END){
    cashG.destroyEach();
    cashG.setVelocityYEach(0);
    jwelleryG.destroyEach();
    jwelleryG.setVelocityYEach(0);
    diamondsG.destroyEach();
    diamondsG.setVelocityYEach(0);
    swordGroup.destroyEach();
    swordGroup.setVelocityYEach(0);
    nailG.destroyEach();
    nailG.setVelocityYEach(0);
    end.visible = true;
    boy.visible = false;
  }

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureTroupe = treasureTroupe + 50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureTroupe = treasureTroupe + 100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureTroupe = treasureTroupe + 150;
      
    }else if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState = END;
    } else if(nailG.isTouching(boy)) {
        nailG.destroyEach();
        gameState = END;
    }
  

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureTroupe,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  
}
}

function createNail(){
  if (World.frameCount % 150 == 0) {
  var nail = createSprite(Math.round(random(50, 350),40, 10, 10));
  nail.addImage(nailImg);
  nail.scale=0.1;
  nail.velocityY = 3;
  nail.lifetime = 150;
  nailG.add(nail);
  
}
}