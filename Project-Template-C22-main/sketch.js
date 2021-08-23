const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}

	bob1 =Bodies.circle(320,380,20,bob_options);
    World.add(world,bob1);

	//create bob2,bob3,bob4,bob5

	
	rope1=new rope(bob1,roof,-80, 0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40,40);
  //do the same for bob2,bob3,bob4,bob5

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
