var ground , paper;
var dustbin , dustbinImage , dusbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
  createCanvas(1600, 1500);
  
  dustbin1 = createSprite(1200,480,200,10);
  dustbin1.addImage(dustbinImage);
  dustbin1.scale = 0.75;


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,600,2000,20);
  paper = new Paper(100,590,10);
  dustbin = new Dustbin(1195,580);

  
  
  
	
 
	//Create the Bodies Here.


	
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("skyblue");
  
  
  ground.display();
  paper.display();
  dustbin.display();
  
  
  
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-85});
  }
}