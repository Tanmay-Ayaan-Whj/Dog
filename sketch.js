var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed,lastfed;



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  
  createCanvas(1000,400);

  foodObj = new Food();

  
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  addFood = createButton('Add Food');
  addFood.position(800,96);
  addFood.mousePressed(addFood);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  if(lastfed>=12){
    
  }else if(lastfed = 0){

text('Last Fed 12 Am',350,30);
    

}else {
  text('lastfed 1 Pm',350,26);
}

if(keyDown(LEFT_ARROW)){
  dog.x = dog.x -2;
 
}
else if(keyDown(RIGHT_ARROW)){
  dog.x = dog.x +2;
  
}
else if(keyDown(UP_ARROW)){
  dog.y = dog.y -2;
}
else if(keyDown(DOWN_ARROW)){
  dog.y = dog.y +2;
}




  
  
 
  

  
  
 
  drawSprites();
}






