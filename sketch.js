var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4,gameobject5;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "blue";
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "yellow";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor = "violet";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor = "orange";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor = "purple";
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect,gameobject1)){
    gameobject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    gameobject1.shapeColor = "yellow";
    movingRect.shapeColor = "green";
    
  }

  if(isTouching(movingRect,gameobject2)){
    gameobject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    gameobject2.shapeColor = "violet";
    movingRect.shapeColor = "green";
    
  }



  if(isTouching(movingRect,gameobject3)){
    gameobject3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    gameobject3.shapeColor = "orange";
    movingRect.shapeColor = "green";
    
  }


  if(isTouching(movingRect,gameobject4)){
    gameobject4.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    gameobject4.shapeColor = "purple";
    movingRect.shapeColor = "green";
    
  }






  drawSprites();
}

