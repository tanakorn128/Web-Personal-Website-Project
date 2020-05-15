//create canvas id games
var canvas = document.getElementById(`games`);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//context canvas 
var context = canvas.getContext('2d');

var  posX = Math.random() * window.innerWidth, //ลูกบอลตำหน่งสุ่ม dX
     posY = Math.random() * window.innerWidth, //ลูกบอลตำหน่งสุ่ม Y
     playX = Math.random() * window.innerWidth, //ตำแหน่งของผู้เล่นด้าน X ถูกสุ่ม แต่ไม่เกินความหว้างหน้าจอ
     playY = window.innerHeight - 100, //ตำแน่งผู้เล่นด้าน Y กำหนดตายตัว
     speedX = 30, //ความเร็วผู้เล่นX
     speedY = 30, //ความเร็วผู้เล่นY
     speedXb = 5, //ความเร็วบอลX
     speedYb = 5,//ความเร็วบอลY
     areaX = window.innerWidth; //ความกว่างของไหน้าจอ X
     areaY = window.innerHeight; //ความกว่างของไหน้าจอ Y
     wallY = window.innerHeight - 400, //ความสูงขีดกั้น
     score = 0;
     var button = document.createElement(`button`);
     document.body.appendChild(button);
     var n = document.createTextNode(`Start`);
     button.appendChild(n);
     
function player(){
    `use strict`
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillRect(playX, playY, 100, 10);  //create rectangle ball
    context.fillRect(0, wallY + 100, areaX, 10);  //create wall
    context.fillRect(posX, posY, 30, 30);
   
    window.requestAnimationFrame(player); //requrst ตลอดเวลา
    speedball();
}
player();

function area(){ //กำหนดขอบเขต ผู้เล่น
    `use strict`
    if(playX < 0){ //ถ้าชิดซ้ายสุดจอ ให้ position playX เป็น 0
        playX = 0;
    }
    if(playX > window.innerWidth - 100){ //ถ้าชิดขวามากไปให้ให้หยุดทที่ตำแหน้ง ขวาสุด-100 
        playX = window.innerWidth - 100;
    }
   
}
function speedball(){
    `use strict`
    var showscore = `Score = ` + score;
    if(posX > window.innerWidth - 30|| posX < 0 || posX == playX){
        speedXb = -speedXb;
    }
    if(posY > window.innerHeight - 30|| posY < 0){
        speedYb = -speedYb;
    }
    if(posY > playY && posY < playY + 3 && posX > playX && posX < playX + 100){//เช็กว่าบอลชนกับผู้เล่นหรือไม่
        console.log(`true`);
        speedYb = -speedYb;
        score = score + 1;
    }
    posY = posY + speedYb;
    posX = posX + speedXb;
    
    context.fillText(showscore , 10, 50)
    context.font = 30 + "px arial"; //fontของ score 
    
}
function moveLeft(){ //moveLeft
    `use strict`
 playX = playX - speedX; //change positionX
 area();
 console.log(playX);

}
function moveRight(){ // movereght
    `use strict`
 playX = playX + speedX; //change positionX
 area();
}
function moveUp(){ //moveup
    `use strict`
playY = playY - speedY; //change positionY
area();
}
function moveDown(){ //movedown
    `use strict`
    playY = playY + speedY; //change positionY
    area();
}
function keyDownHandler(key){
    `use strict`
if(key.keyCode == 37){ //mouseLeft
    moveLeft();
}
if(key.keyCode == 39){ //mouseRight
    moveRight();
}
if(key.keyCode == 40){ //mouseDown
  //  moveDown();
}
if(key.keyCode == 38){ //moueUp
   // moveUp();
}
}

window.addEventListener(`keydown`,keyDownHandler); 

