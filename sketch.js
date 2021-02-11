const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

   

    ground= new Ground(500,550,1000,20);


    base1= new Ground(390,360,220,10);
    
    block1=new Box(310,340,30,30)
    block2=new Box(341,340,30,30)
    block3=new Box(372,340,30,30)
    block4=new Box(403,340,30,30)
    block5=new Box(434,340,30,30)
    block6=new Box(465,340,30,30)
    block7=new Box(325,300,30,30)
    block8=new Box(356,300,30,30)
    block9=new Box(387,300,30,30)
    block10=new Box(418,300,30,30)
    block11=new Box(449,300,30,30)
    block12=new Box(340,260,30,30)
    block13=new Box(371,260,30,30)
    block14=new Box(402,260,30,30)
    block15=new Box(433,260,30,30)
    block16=new Box(355,220,30,30)
    block17=new Box(386,220,30,30)
    block18=new Box(417,220,30,30)
    block19=new Box(370,180,30,30)
    block20=new Box(401,180,30,30)
    block21=new Box(385,140,30,30)



    base2=new Ground(735,215,150,7)


    block01=new Box(680,200,20,20)
    block02=new Box(700,200,20,20)
    block03=new Box(720,200,20,20)
    block04=new Box(740,200,20,20)
    block05=new Box(760,200,20,20)
    block06=new Box(780,200,20,20)
    block07=new Box(690,175,20,20)
    block08=new Box(710,175,20,20)
    block09=new Box(730,175,20,20)
    block010=new Box(750,175,20,20)
    block011=new Box(770,175,20,20)
    block012=new Box(700,150,20,20)
    block013=new Box(720,150,20,20)
    block014=new Box(740,150,20,20)
    block015=new Box(760,150,20,20)
    block016=new Box(710,125,20,20)
    block017=new Box(730,125,20,20)
    block018=new Box(750,125,20,20)
    block019=new Box(720,100,20,20)
    block020=new Box(740,100,20,20)
    block021=new Box(730,75,20,20)

    polygon=new Polygon(100,100,50,50)
    

    slingshot = new SlingShot(polygon.body,{x:200, y:100});


}
function draw(){
    background("orange");
    

   
    textSize(30)
    fill("yellow")
    text("Drag the Hexagonal Stone and Release it, to launch it toward the blocks",30,30)
    fill("purple")
    text("Press Space Key",30,240)
    text("for more chances",30,270)


    Engine.update(engine);



    

    ground.display();


    base1.display();
    
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
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();


    base2.display();


    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();
    block08.display();
    block09.display();
    block010.display();
    block011.display();
    block012.display();
    block013.display();
    block014.display();
    block015.display();
    block016.display();
    block017.display();
    block018.display();
    block019.display();
    block020.display();
    block021.display();

    polygon.display();


   slingshot.display();

  

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){
  
      Matter.Body.setPosition(polygon.body,{x:200,y:100});
      slingshot.attach(polygon.body);
  
    }
  
  
  }
  
  
