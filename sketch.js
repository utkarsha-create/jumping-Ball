var canvas;
var surface1;
var surface2;
var surface3;
var surface4;
var box,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    surface1 = createSprite(40,600,200,50);
    surface1.shapeColor="blue";  
    surface2 = createSprite(250,600,200,50);
    surface2.shapeColor="orange";  
    surface3 = createSprite(480,600,230,50);
    surface3.shapeColor="purple";  
    surface4 = createSprite(720,600,230,50);
    surface4.shapeColor="green";  

    box= createSprite(random(420,750),500,40,40);
    box.shapeColor="white";
    
    
}

function draw() {
    background("grey");
    edges = createEdgeSprites();
    box.bounceOff(edges);

     music.play();
    box.y = World.mouseY;
    box.x = World.mouseX;

    if(surface1.isTouching(box)&&box.bounceOff(surface2)){
        ball.shapeColor = "white";
     music.play();
    }
    
    if(surface2.isTouching(box)){
          box.shapeColor ="orange";
          box.velocityX =0;
          box.velocityY = 0;
          music.stop();
        
    }
    
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        ball.shapeColor = "white";
    
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        ball.shapeColor = "white";
    
    }
   
     drawSprites();


    //add condition to check if box touching surface and make it box
}
