const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bg,hbg,bg2;
var level1,level2;
var engine, world;
var box1,box2,box3,box4,box5;
var boxl1,boxl2,boxl3,boxl4,boxl5;
var ground,ground2;
var pig1,pig2;
var log1,log2,log3,log4;
var bird,bird2;
var sling;
var score=0;
var gameState=3;
var startButton,start;
var rules,rule,rule2;

function preload(){
bg=loadImage("images/level 1 bg.jpg")
hbg=loadImage("images/bg.png")
start=loadImage("images/play button.png")
bg2=loadImage("images/level 2bg.png")
}
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

 // if(gameState===2){
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
box5=new Box(810,160,70,70)
  

ground=new Ground(600,360,1200,20)

pig1=new Pig(810,350)
pig2=new Pig(810,220)
log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
bird=new Bird(110,100)
bird2=new Bird2(80,350)
sling=new SlingShot(bird.body,{x:200,y:180})
score=0;
  //}
  //if(gameState===3){
    boxl1=new Box(700,320,70,70)
boxl2=new Box(920,320,70,70)
boxl3=new Box(700,240,70,70)
boxl4=new Box(920,240,70,70)
boxl5=new Box(810,160,70,70)
ground2=new Ground(600,375,1200,20)
  //}


rules=createButton("HOW TO PLAY")
rules.position(10,360)
rules.mousePressed(()=>{
  gameState=-1
})


level1=createButton("LEVEL1")
level1.position(200,100)
level1.mousePressed(()=>{
  gameState=2
})

level2=createButton("LEVEL2")
level2.position(400,100)
level2.mousePressed(()=>{
  gameState=3
})
  rule=createElement("h1")
  rule.html("1. To attach the birds to the slingshot: Press 1 to attach red bird, press 2 to attach black ")
  rule.position(10,0)
  rule.style("color","white")

  rule2=createElement("h1")
  rule2.html("bird.")
  rule2.position(15,40)
  rule2.style("color","white")
startButton=createButton("play")
startButton.position(1100,50)
startButton.mousePressed(()=>{
  gameState=1
  startButton.hide()
    Matter.Body.setPosition(bird.body,{x:200,y:190})
    
})

}



function draw() {
  
  background(bg);
  if(gameState===-1){
    clear()
    background("#654321")
    rules.hide()
    startButton.hide()
    level2.hide()
    rule.show()
    rule2.show()
  }
  if(gameState===0){
    rule.hide()
    level2.hide()
    rule2.hide()
    clear()
    background(hbg)
    level1.hide()
  }
  if(gameState===1){
clear()
background(0,50,0)
textSize(50)
fill(255)
text("LEVELS",530,50)
level1.show()
level2.show()
rules.hide()

  }
  if(gameState===2){
    level1.hide()
    level2.hide()
noStroke()
fill(255)
textSize(35)
 text("Score: "+score,width-300,50)
 
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig1.score()
pig2.display();
pig2.score()
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();
 bird2.display()
 sling.display()
// text("gamestate "+gameState,300,50)

  }
  if(gameState===3){
    level1.hide()
    level2.hide()
    rule.hide()
    rule2.hide()
    rules.hide()
    startButton.hide()
    clear()
    background(bg2)

   ground.display()
    ground2.display()
    boxl1.display()
    boxl2.display()
    boxl3.display()
    boxl4.display()
    boxl5.display()
  }
} 
function mouseDragged(){
 if(keyCode===50){
  Matter.Body.setPosition(bird2.body,{x:mouseX,y:mouseY})
 }else if(keyCode===49){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 }
}    
function mouseReleased(){
  sling.fly()
 
}  
function keyPressed(){
  if(keyCode===50 ){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird2.body,{x:130,y:100})
    sling.attach(bird2.body)
    
  }
  if(keyCode===49 ){
    bird.trajectory=[];
    bird2.trajectory=[];

    Matter.Body.setPosition(bird.body,{x:130,y:100})
    sling.attach(bird.body)
    
  }
}

