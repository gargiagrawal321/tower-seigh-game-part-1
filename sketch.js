const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7;
 var block8,block9,block10,block11,block12;
 var block13,block14,block15;
 var block16;

var blockA, blockB, blockC, blockD, blockE;
var blockF, blockG, blockH;
var  blockI;

var ground1,ground2,ground3;
var sling,chain;
function setup() {
  createCanvas(1200,780);
  engine=Engine.create();
  world=engine.world;

  ground1 = new Ground(width/2,485,width,20);
  ground2=new Ground(430+162,370,280,15);
  ground3=new Ground(850+200,250,220,15);

block1 = new Block(327+170,350,30,45,"lightblue")
block2 = new Block(358+170,350,30,45,"lightblue")
block3 = new Block(389+170,350,30,45,"lightblue")
block4 = new Block(420+170,350,30,45,"lightblue")
block5 = new Block(451+170,350,30,45,"lightblue")
block6 = new Block(482+170,350,30,45,"lightblue")
block7 = new Block(513+170,350,30,45,"lightblue")

block8 = new Block(358+170,291,30,45,"yellow")
block9 = new Block(389+170,291,30,45,"yellow")
block10 = new Block(420+170,291,30,45,"yellow")
block11 = new Block(451+170,291,30,45,"yellow")
block12 = new Block(482+170,291,30,45,"yellow")

block13 = new Block(389+170,241,30,45,"lightgreen")
block14 = new Block(420+170,241,30,45,"lightgreen")
block15 = new Block(451+170,241,30,45,"lightgreen")

block16 = new Block(420+170,190,30,45,"orange")

blockA = new Block(850+200,207,30,45, "cyan")
blockB = new Block(819+200,207,30,45, "cyan");
blockC = new Block(788+200,207,30,45, "cyan");
blockD = new Block(881+200,207,30,45, "cyan");
blockE = new Block(912+200,207,30,45, "cyan");

blockF = new Block(881+200,157,30,45, "lightgrey");
blockG = new Block(850+200,157,30,45, "lightgrey");
blockH = new Block(819+200,157,30,45, "lightgrey");

blockI = new Block(850+200,97,30,45, "yellow");

polygon = new Polygon(100,250,20);

chain=new Chain(polygon.body,{x:150,y:250});

}

function draw() {
  background("pink");  
  Engine.update(engine);
  drawSprites();

  ground1.display();
ground2.display();
ground3.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display()

blockA.display();
blockB.display();
blockC.display();
blockD.display();
blockE.display();

blockF.display();
blockG.display();
blockH.display();

blockI.display();

polygon.display()

chain.display()

strokeWeight(10)
stroke("black")
fill("rose")
textSize(20);
textFont("Elephanta")
text("Press the space key to get second chance",50,50)

}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:50,y:250});
    chain.attach(polygon.body);
  }
}