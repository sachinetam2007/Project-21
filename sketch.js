var bullet,wall
var speed,weight
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weght=random(400,1500);
  bullet.velocityX=speed;
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
    }
  drawSprites();
}

function hasCollided(obj1,obj2)
{
  bulletRightEdge=obj1.x+obj2.width;
  wallLeftEdge=obj2.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true
  }
     return false;
  
}