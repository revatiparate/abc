const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;
var monsterImg;
var male , female,maleImg,femaleImg;
var ak;
var choose, chooseImg , choose2;
var start,startImg,play,playImg;
var gamestate;

function preload() {
  bg = loadImage("GamingBackground.png");
  monsterImg=loadImage("monster.png");
  startImg=loadImage("start.png");
  maleImg=loadImage("superhero2.png");
  femaleImg=loadImage("superhero.png");
  chooseImg=loadImage("choose.png")
}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,100,250);
  heroine = new Heroine(400,700,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  rope2 = new Rope(heroine.body, { x: 500, y: 50 });
  monster = new Monster(1000,550,300);
  


  start=createSprite(750,500,50,50);
 start.addImage(startImg);
 start.scale=0.4

 male=createSprite(400,300,50,50);
 male.addImage(maleImg);
 male.scale=0.3;
 male.visible =false;

 female=createSprite(1200,300,50,50);
 female.addImage(femaleImg);
 female.scale=0.2;
 female.visible =false;

 choose=createSprite(350,450,50,50);
 choose.addImage(chooseImg);
 choose.scale=0.1;
 choose.visible =false;

 choose2=createSprite(1150,450,50,50);
 choose2.addImage(chooseImg);
 choose2.scale=0.1;
 choose2.visible =false;



  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(800, 100, 70, 70);
  box14 = new Box(800, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(700, 100, 70, 70);
  box21 = new Box(600, 100, 70, 70);
  box22 = new Box(600, 100, 70, 70);
  box23 = new Box(600, 100, 70, 70);
  box24 = new Box(600, 100, 70, 70);
  box25 = new Box(600, 100, 70, 70);
  box26 = new Box(600, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites();
  ground.display();
  //monster.display();

  


  
  if(mousePressedOver(start)){

    start.destroy();
   
    male.visible =true;
    female.visible =true;
    choose.visible =true;
    choose2.visible =true;
 
    //gamestate= 1
  }
 
  if(mousePressedOver(choose)){
     gamestate="3";
  
     choose.visible =false;
     choose2.visible =false;
     choose.destroy();
     choose2.destroy();

     male.destroy();
     female.destroy();
    

   }

   else if(mousePressedOver(choose2)){
     gamestate="4";
   
    choose.visible =false;
    choose2.visible =false;
    choose.destroy();
    choose2.destroy();
     male.destroy();
     female.destroy();
   
   }
   if(gamestate==="3"){
    hero.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
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
    rope.display();
    monster.display();
   }


   if(gamestate==="4"){
   
  
    heroine.display();
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
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
    rope.display();
    monster.display();
   }

}

function mouseDragged() {
  
 Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
  

 
  
     
}

