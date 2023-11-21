
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius = 40;
var world;
var leftSide;
var rightSide;
var groundObj;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

	Matter.Bodies.circle(100 , 200 , [ball_options] );
	ball = Bodies.circle(220,10,10,ball_option);
    World.add(world,ball);
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();

  groundObj = new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
  rightSide = new ground(1350,600,20,120);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85,y:-85})
	}
}




