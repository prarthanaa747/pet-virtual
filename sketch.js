const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  pig1;
var backgroundImg;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/l.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    
    pig1 = new Pig(810, 350);
    pig3 = new Pig(810, 220);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    pig1.display();
    
    bird.display();
   
      
    
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  
}
