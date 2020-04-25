var canvas = document.getElementById(`games`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var  posX = Math.random() * window.innerWidth,
     posY = Math.random() * window.innerWidth,
     playX = Math.random() * window.innerWidth,
     playY = window.innerHeight - 100,
     speedX = 30,
     speedY = 30,
     speedXb = 5,
     speedYb = 5,
     areaX = window.innerWidth;
     areaY = window.innerHeight;
     wallY = window.innerHeight - 400,
     score = 0;
     
     
function player(){
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillRect(playX, playY, 100, 10);  //create rectangle
    context.fillRect(0, wallY + 100, areaX, 10);  //create wall
    context.fillRect(posX, posY, 30, 30);
   
    window.requestAnimationFrame(player);
    speedball();
}
player();

function area(){
    if(playX < 0){
        playX = 0;
    }
    if(playX > window.innerWidth - 100){
        playX = window.innerWidth - 100;
    }
   
}
function speedball(){
    var showscore = `Score = ` + score;
    if(posX > window.innerWidth - 30|| posX < 0 || posX == playX){
        speedXb = -speedXb;
    }
    if(posY > window.innerHeight - 30|| posY < 0){
        speedYb = -speedYb;
    }
    if(posY > playY && posY < playY + 3 && posX > playX && posX < playX + 100){
        console.log(`true`);
        speedYb = -speedYb;
        score = score + 1;
    }
    posY = posY + speedYb;
    posX = posX + speedXb;
    
    context.fillText(showscore , 10, 50)
    context.font = 30 + "px arial";
    
}
function moveLeft(){ //moveLeft
 playX = playX - speedX; //change positionX
 area();
 console.log(playX);

}
function moveRight(){ // movereght
 playX = playX + speedX; //change positionX
 area();
}
function moveUp(){ //moveup
playY = playY - speedY; //change positionY
area();
}
function moveDown(){ //movedown
    playY = playY + speedY; //change positionY
    area();
}
function keyDownHandler(key){
if(key.keyCode == 37){
    moveLeft();
}
if(key.keyCode == 39){
    moveRight();
}
if(key.keyCode == 40){
  //  moveDown();
}
if(key.keyCode == 38){
   // moveUp();
}
}

window.addEventListener(`keydown`,keyDownHandler);

