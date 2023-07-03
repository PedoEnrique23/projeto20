
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground,blok1,blok2,blok3;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ground_options={
		isStatic: true
	}

	var blok1_options={
		restitution:0.5,
		friction:0.02
	}

	ground=Bodies.rectangle(600,580,1200,2,ground_options);
	World.add(world,ground);

	blok1=Bodies.circle(220,10,50,blok1_options);
	World.add(world,blok1);


	

	fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);

  
}


function draw() {
  
  background("black");
  
  Engine.update(engine)

  rect(ground.position.x, ground.position.y,1200);

  ellipse(blok1.position.x,blok1.position.y,50);
 
}



