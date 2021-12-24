const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 380, 400, 10);
  ground2 = new Ground(20, 200, 10, 400);
  ground3 = new Ground(380, 200, 10, 400);
  ground4 = new Ground(200, 10, 400, 10);
}

function draw() 
{
  background("black");
  Engine.update(engine);

  ground.show();
  ground2.show();
  ground3.show();
  ground4.show();
 
}

