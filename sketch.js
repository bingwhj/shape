var fixedRect, movingRect;
var ob1,ob2
var car,wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
car=createSprite(200,200,40,40)
car.shapeColor="cyan"
wall=createSprite(1000,200,20,100)
wall.shapeColor="green"
car.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}
else{

  movingRect.shapeColor = "pink";
  fixedRect.shapeColor = "pink";
}
bounceOff(car,wall)
  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y -ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
return true;
}
else {
  return false

}}
function bounceOff(ob1,ob2){
 
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
      ob1.velocityX=ob1.velocityX*(-1)
      ob2.velocityX=ob2.velocityX*(-1)
    }
    if( ob1.y -ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
    
    ob1.velocityY=ob1.velocityY*(-1)
        ob2.velocityY=ob2.velocityY*(-1)
      }}