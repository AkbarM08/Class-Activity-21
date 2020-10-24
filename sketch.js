var fixedRect, movingRect;
var ob1,ob2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(200,500,50,80);
  ob2 = createSprite(700,500,50,80);
  ob1.shapeColor = "red";
  ob2.shapeColor = "red";
  ob1.velocityX = 5
  ob2.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(ob1,ob2);
  drawSprites();
}

