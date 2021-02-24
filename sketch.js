var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1=createSprite(320,200,10,10);
	box1.addImage(packageIMG)
	box1.scale=0.2

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

if(box1.collide(boxBase)){

}

  if(keyDown(LEFT_ARROW)){
helicopterSprite.x=helicopterSprite.x-2;
}
if(keyDown(RIGHT_ARROW)){
	helicopterSprite.x=helicopterSprite.x+2;
	}
	if(keyDown(DOWN_ARROW)){
		box1.velocityY = 5;
		
	}
	
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
 packageBody.x=helicopterSprite.x;
 packageIMG.x=helicopterSprite.x;
 packageSprite.x=helicopterSprite.x;
  box1.x=helicopterSprite.x;
  
 
  //packageSprite.x=packageBody.x;
 // packageSprite.y=packageBody.y;
  //packageSprite.x=packageIMG.x;
  //packageSprite.y=packageIMG.y;


drawSprites();
  
  
  
 
}
