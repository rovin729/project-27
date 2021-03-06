
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(350,300);
	bob2=new Bob(310,300);
	bob3=new Bob(390,300);
	bob4=new Bob(270,300);
	bob5=new Bob(420,300);
	roof1=new Roof(350,100,200,15);
	rope1=new Rope(bob1,roof1,0,0);
	rope2=new Rope(bob2,roof1,-40,0);
	rope3=new Rope(bob3,roof1,40,0);
	rope4=new Rope(bob4,roof1,-80,0);
	rope5=new Rope(bob5,roof1,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



