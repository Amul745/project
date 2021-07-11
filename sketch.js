
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,wall4
var circle
var rock;
var wall;
let engine;
let world;
var ball;
var ground;
function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  arrow1=createImg("right.png")
  arrow1.position(220,30)
  arrow1.size(50,50)
  arrow1.mouseClicked(hforce)
  arrow2=createImg("up.png")
  arrow2.position(20,20)
  arrow2.size(50,50)
  arrow2.mouseClicked(vforce)
  var circle_options={ 
    restitution:0.5,
  
  }

circle=Bodies.circle(200,100,20,circle_options)
 World.add(world,circle)

//    var ball_options = {
//     restitution: 0.95,
//     frictionAir:0.01
//   }
   
//    var ground_options ={
//      isStatic: true
//    };
//   var rock_options={
//     restitution:0.85
//   }

  // ground = Bodies.rectangle(200,390,400,20,ground_options);
  // World.add(world,ground);

  // ball = Bodies.circle(100,10,20,ball_options);
  // World.add(world,ball);
  // rock=Bodies.circle(300,34,14,rock_options);
  // World.add(world,rock)
  // wall = Bodies.rectangle(300,200,200,20,ground_options);
  // World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  wall1=new Ground (200,390,400,20)
  wall2=new Ground (390,200,20,400)
  wall3=new Ground (10,200,20,400)
  wall4=new Ground (200,10,400,20)
  //wall5=new Ground (200,390,400,20)
}


function draw() 
{
  background("white");
  Engine.update(engine);
//   rect(wall.position.x,wall.position.y,200,20);
//   ellipse(ball.position.x,ball.position.y,20);
//   rect(ground.position.x,ground.position.y,400,20);
//   ellipse(rock.position.x,rock.position.y,20);


  ellipse(circle.position.x,circle.position.y,10,10)
wall1.display()
wall2.display()
wall3.display()
wall4.display()

}

function hforce(){
Matter.Body.applyForce(circle,{x:0,y:0},{x:0.05,y:0})
}
function vforce(){
  Matter.Body.applyForce(circle,{x:0,y:0},{x:0.0,y:-0.05})
  }