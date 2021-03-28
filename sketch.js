
const Engine = Matter.Engine;
const World  = Matter.World
const Body   = Matter.Body
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine , world 
var ground;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 ,  box11 , box12 , box13 , box14 , box15 , box16 , box17 , box18 , box19 , box20;
var box21 , box22 , box23 , box24 , box25
var ball;
var slingshot;

function setup() {
  createCanvas(1000,600);

engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,height-20,width,50);

box1 = new Box(700,560)
box2 = new Box(700,510)
box3 = new Box(700,460)
box4 = new Box(700,410)
box5 = new Box(700,360)
box6 = new Box(750,560)
box7 = new Box(750,510)
box8 = new Box(750,460)
box9 = new Box(750,410)
box10 = new Box(750,360)
box11 = new Box(800,560)
box12 = new Box(800,510)
box13 = new Box(800,460)
box14 = new Box(800,410)
box15 = new Box(800,360)
box16 = new Box(850,560)
box17 = new Box(850,510)
box18 = new Box(850,460)
box19 = new Box(850,410)
box20 = new Box(850,360)
box21 = new Box(650,560)
box22 = new Box(650,510)
box23 = new Box(650,460)
box24 = new Box(650,410)
box25 = new Box(650,360)

ball = new Ball(width/2,400,100)

slingshot = new Slingshot(ball.body,{x:450,y:100})


  Engine.run(engine);
}

function draw() {
  Engine.update(engine)

  background("maroon");  
  ground.display();

box1.display()
box2.display()
box3.display() 
box4.display()
box5.display()
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

;ball.display();
slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}