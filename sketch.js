
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);
  
	engine = Engine.create();
	world = engine.world;

    var ball_Options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    
	//Create the Bodies Here.
    ball  = Bodies.circle(50,50,20,ball_Options);
	World.add(world,ball);
   
	ground = new Ground(500,690,1000,10)

	leftSide = new Ground(700,640,10,100);
	rightSide = new Ground(850,640,10,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  leftSide.display();
  rightSide.display()
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
	   Body.applyForce(ball,{x:0,y:0},{x:45,y:-35});
	}
}


