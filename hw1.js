
var canvas = document.getElementById('My Canvas');
var slider1 = document.getElementById('slider1');
slider1.value=0
var slider2 = document.getElementById('slider2');
slider2.value=5
var context = canvas.getContext('2d');
//fillrect
var context2 = canvas.getContext('2d');
//rect
var context3 = canvas.getContext('2d');
//fillText
var context4 = canvas.getContext('2d');
//line
var context5 = canvas.getContext('2d');

var x = 50;
var y = 0;

var x2 = 50;
var y2 = 0;

var x3 = 50;
var y3 = 0;

var x4 = 50;
var y4 = 0;

var winDis = 0
function draw(){ 
  
  if(slider1.value == 310){
    rec()
    
  }
  else{
    move()
    sliderRec();
    context3.font = "13px serif";
    context3.fillText("Slide The First Slider to the End to Start the Game", 25, 480);
    circleShape()
  }
}

function move(){
  canvas.width = canvas.width
  var dx = slider1.value;
  context2.save();
  context2.translate(dx,100);
  cir();
  context2.restore();
  
  var sMove = slider1.value;
  context4.save();
  context4.translate(sMove,0);
  sliderShape();
  context4.restore();
}

function cir(){
  context3.font = "40px serif";
  // car 1
  context3.fillText("🚕", 400, 340);
  context.fillStyle = "orange";
  context.fillRect(400, 300, 10, 10);
  context2.strokeStyle = "blue";
  context2.rect(400, 300, 10, 10);
 
  // car 2
  context3.fillText("🚗", 470, 340);
  context.fillStyle = "red";
  context.fillRect(470, 300, 10, 10);
  context2.strokeStyle = "blue";
  context2.rect(470, 300, 10, 10);
  
  // car 3
  context3.fillText("🚌", 540, 340);
  context.fillStyle = "white";
  context.fillRect(540, 300, 10, 10);
  context2.strokeStyle = "blue";
  context2.rect(540, 300, 10, 10);
  
  // car 4
  context3.fillText("🚓", 610, 340);
  context.fillStyle = "black";
  context.fillRect(610, 300, 10, 10);
  context2.strokeStyle = "blue";
  context2.rect(610, 300, 10, 10);
  
  
  
  context2.stroke();
}


slider1.addEventListener("input",draw);
slider2.addEventListener("input",circleShape);



function rec() {
  setInterval(function (){
    context.beginPath();  
    
    // Path
    context.fillStyle = "gray";
    context.fillRect(0, 0, 1000, 304);
    
    context4.lineWidth = 6;
    context4.strokeStyle = "white";
    context4.beginPath();
    context4.moveTo(0, 3);
    context4.lineTo(1000, 3);
    context4.moveTo(0, 75);
    context4.lineTo(1000, 75);
    
    context4.moveTo(0, 150);
    context4.lineTo(1000, 150);
    context4.moveTo(0, 225);
    context4.lineTo(1000, 225);
    context4.moveTo(0, 300);
    context4.lineTo(1000, 300);
    
    context4.stroke();
    
    
    
    //car 1
    context.fillStyle = "orange";
    context.fillRect(x, 20, 10, 10);
    context3.font = "50px serif";
    context3.fillText("🚕", x, 50)
    
    //car 2
    context.fillStyle = "red";
    context.fillRect(x2, 100, 10, 10);
    context3.fillText("🚗", x2, 130);
    
    
    //car 3
    context.fillStyle = "white";
    context.fillRect(x3, 165, 10, 10);
    context3.fillText("🚌", x3, 210);
    
    
    //car 4
    context.fillStyle = "black";
    context.fillRect(x4, 240, 10, 10);
    context3.fillText("🚓", x4, 280);
    x = x + y;
    x2 = x2 + y2;
    x3 = x3 + y3;
    x4 = x4 + y4;
    if(x < 1000){
      y = Math.random() * 15;
    }
    else{
      if(x != 1001){
        x = 1000
        y = 0;
      }
    }
    
    if(x2 < 1000){
      y2 = Math.random() * 15;
    }
    else{
      if(x2 != 1001){
        x2 = 1000
        y2 = 0;
      }
    }
    
    if(x3 < 1000){
      y3 = Math.random() * 15;
    }
    else{
      if(x3 != 1001){
        x3 = 1000
        y3 = 0;
      }
    }
    
    if(x4 < 1000){
      y4 = Math.random() * 15;
    }
    else{
      if(x4 != 1001){
        x4 = 1000
        y4 = 0;
      }
    }
    
    context3.font = "20px serif";
    context3.fillText("1: ", 60, 340);
    
    context3.font = "20px serif";
    context3.fillText("2: ", 160, 340);
    
    context3.font = "20px serif";
    context3.fillText("3: ", 250, 340);
    
    context3.font = "20px serif";
    context3.fillText("4: ", 340, 340);
    
    if(x == 1000){
      winDis = winDis + 90
      context3.font = "20px serif";
      context3.fillText("🚕", winDis, 340);
      x = 1001
    }
    if(x2 == 1000){
      winDis = winDis + 90
      context3.font = "20px serif";
      context3.fillText("🚗", winDis, 340);
      x2 = 1001
    }
    if(x3 == 1000){
      winDis = winDis + 90
      context3.font = "20px serif";
      context3.fillText("🚌", winDis, 340);
      x3 = 1001
    }
    if(x4 == 1000){
      winDis = winDis + 90
      context3.font = "20px serif";
      context3.fillText("🚓", winDis, 340);
      x4 = 1001
    }
    

   
  } ,70)
  
}

function sliderRec(){
  context2.lineWidth = 3;
  context2.strokeStyle = "red";
  context2.rect(25, 400, 350, 50);
  context2.stroke();
}

function sliderShape(){
  context4.lineWidth = 3;
  context4.strokeStyle = "red";
  context4.beginPath();
  context4.moveTo(25, 400)
  context4.lineTo(40, 425)
  context4.lineTo(25, 450)
  
  context4.moveTo(35, 400)
  context4.lineTo(50, 425)
  context4.lineTo(35, 450)
  
  context4.moveTo(45, 400)
  context4.lineTo(60, 425)
  context4.lineTo(45, 450)
  
  context4.stroke();
  
}

function circleShape(){
  context.fillStyle = "white";
  context.fillRect(25, 340, 55, 55);
  var dy = slider2.value
  context5.beginPath();
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context5.ellipse(50, 370, 25, 25, 50, 50, 50);
  context5.stroke();
  
  context5.beginPath();
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context5.ellipse(50, 380, dy, dy, 50, 50, 50);
  context5.stroke();
  
  context4.lineWidth = 1;
  context4.strokeStyle = "black";
  context4.beginPath();
  context4.moveTo(30, 360)
  context4.lineTo(40, 360)
  context4.moveTo(60, 360)
  context4.lineTo(70, 360)
  context4.stroke();
  
  context4.lineWidth = 1;
  context4.strokeStyle = "purple";
  context4.beginPath();
  context4.moveTo(125, 350)
  context4.lineTo(150, 350)
  context4.lineTo(165, 370)
  context4.lineTo(150, 390)
  context4.lineTo(125, 390)
  context4.lineTo(110, 370)
  context4.lineTo(125, 350)
  context4.stroke();
  
  
  
  
  
}





function getRandom() {
  return Math.random();
}

window.onload = draw;
