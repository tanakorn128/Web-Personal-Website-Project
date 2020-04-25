`use strict`
var canvas = document.getElementById('games');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//get context
var context = canvas.getContext('2d');


class ball{ 
    constructor(posX, posY, scale, speedX, speedY){
        this.posX = posX;
        this.posY = posY;
        this.radius = scale;
        this.speedX = speedX; 
        this.speedY = speedY;
        this.vs = [];
        for(var i =0; i < 4; i++){
            this.vs.push({x: this.posX, y: this.posY});  //สร้าง object เก็บ location 
        }
    }
    drawball(){
        //draw circle
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2);
        context.fillStyle = `red`;
        context.stroke();
        context.fillStyle = `rgba(255, 0, 0, 0.8)`;
        context.fill();
        for(var i =0; i < this.vs.length; i++){
            context.fillStyle = `black`;
            context.fillRect(this.vs[i].x, this.vs[i].y, this.scale, this.scale);
            context.fill();
        }
    }
   
    update(){
        if(this.posX + radius > window.innerWidth || this.posX - radius < 0){
            this.speedX = -this.speedX;
        }
        if(this.posY + radius > window.innerHeight){
            this.speedY = -this.speedY; // ถ้าโดนไม้แด้งกลับ
        }

        if (this.posY - radius < 0) {
            this.speedY = -this.speedY;
        }
        
       this.posX = this.posX + this.speedX;
       this.posY = this.posY + this.speedY;
       this.locationball();
        window.requestAnimationFrame(animationionion);
    }
    moveLefts(){
        this.posX = this.posX - this.radius;
       // this.posXplayer = this.posXplayer - this.radius;
        
    }
    moveRights(){
        this.posY = this.posY - this.radius;
        
    }
    locationball(){
        //this.vs.unshift(this.vs.pop());
        this.vs[0] = {x: this.posX, y:this.posY};
       
       
        
    }
}

var posXball = Math.random() * window.innerWidth;
var posYball = Math.random() * window.innerHeight;
var radius = 50;
var speedXball = 5;
var speedYball = 5;

var circleone = new ball(posXball, posYball, radius, speedXball, speedYball);

funanimationmationmation() {
    
   context.clearRect(0, 0, window.innerWidth, window.innerHeight); //ล้างหน้าจอ
   circleone.drawball(); //สร้างวงกลม
    circleone.update();
  
    //context.fillRect(0, window.innerWidth * 0.5,window.innerWidth,30); // เส้นกำแพงกั้น
    //playerone.drawplayer(); //สร้างผู้เล่น
    //playerone.updatepy();
  
animationanimationanimation);

function keyDownHandler(key){
   if(key.keyCode == 37){
    circleone.moveLefts();
       console.log(`Left`);
   }
   if(key.keyCode == 39){
   circleone.moveRights();
     
    console.log(`Right`);
}
}

window.addEventListener(`keydown`,keyDownHandler);