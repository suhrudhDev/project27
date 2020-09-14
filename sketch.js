
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var ball1,ball2,ball3,ball4,ball5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new ball(100,328,20);
	ball2 = new ball(100,328,20);
	ball3 = new ball(100,328,20);
	ball4 = new ball(100,328,20);
	ball5 = new ball(100,328,20);

	slingshot = new Chain(bird.body,{x:200, y:50});


	Engine.run(engine);
   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



