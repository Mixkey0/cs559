function setup() {
  const canvas = document.getElementById("myCanvas");
  var x = 1;
  var slider = document.getElementById('slider');
  var slider2 = document.getElementById('slider2');
  slider.value = 30;
  slider2.value = 3;
  var move = 700;
  var move2 = 900;
  var move3 = 1000;
  var move4 = 1000;
  
  function draw(){
    canvas.width = canvas.width
    const context = canvas.getContext("2d");
    background()
    var y = slider.value;
    var speed = slider2.value;
    context.font = "65px serif";
    context.fillText("🧍‍", 250, y);
    if(y!=30){
    if(y == 600){
      context.font = "13px serif";
      context.fillText("Thank You!", 100, 580);
    }
    context.font = "100px serif";


    x = (x + 1);

    if(move > 0){
      move = (move-5)%800
    }
    else{
      move = 800
    }

    if(move2 > 0){
      move2 = (move2-10)%800
    }
    else{
      move2 = 800
    }


    if(move3 > 0){
      move3 = (move3-8)%1000
    }
    else{
      move3 = 1000
    }
    if(move4 > 0){
      move4 = (move4-20)%1200
    }
    else{
      move4 = 1200
    }

    angle = ((-Math.PI*5) /60) * x;
    angle2 = ((Math.PI*speed) /360) * x;
    animal("🦋", 280, y-40, angle2, 20);
    animal("🦋", 280, y-40, -angle2, 20);
    context.fillRect(move-55, 100, 55, 55);
    wholeCar("🚗", move, 150, move-100, 145)
    context.fillRect(move2-55, 200, 55, 55);
    wholeCar("🚕", move2, 250, move2-100, 245)
    context.fillRect(move3-55, 300, 55, 55);
    wholeCar("🚓", move3, 350, move3-100, 345)
    context.fillRect(move4-55, 430, 50, 50);
    wholeCar("🚑", move4, 480, move4-100, 475)
    }

    function background(){
      context.font = "13px serif";
      context.fillText("Slowly move the first slider to help the people to go to other side", 25, 550);
      context.beginPath();
      context.fillStyle = "orange";
      context.fillRect(0, 70, 700, 20);
      context.fillRect(0, 125, 50, 20);
      context.fillRect(100, 125, 50, 20);
      context.fillRect(200, 125, 50, 20);
      context.fillRect(300, 125, 50, 20);
      context.fillRect(400, 125, 50, 20);
      context.fillRect(500, 125, 50, 20);
      context.fillRect(600, 125, 50, 20);
      context.fillRect(0, 180, 700, 20);
      context.fillRect(0, 235, 50, 20);
      context.fillRect(100, 235, 50, 20);
      context.fillRect(200, 235, 50, 20);
      context.fillRect(300, 235, 50, 20);
      context.fillRect(400, 235, 50, 20);
      context.fillRect(500, 235, 50, 20);
      context.fillRect(600, 235, 50, 20);
      context.fillRect(0, 290, 700, 20);
      context.fillRect(0, 345, 50, 20);
      context.fillRect(100, 345, 50, 20);
      context.fillRect(200, 345, 50, 20);
      context.fillRect(300, 345, 50, 20);
      context.fillRect(400, 345, 50, 20);
      context.fillRect(500, 345, 50, 20);
      context.fillRect(600, 345, 50, 20);
      context.fillRect(0, 400, 700, 20);
      context.fillRect(0, 455, 50, 20);
      context.fillRect(100, 455, 50, 20);
      context.fillRect(200, 455, 50, 20);
      context.fillRect(300, 455, 50, 20);
      context.fillRect(400, 455, 50, 20);
      context.fillRect(500, 455, 50, 20);
      context.fillRect(600, 455, 50, 20);
      context.fillRect(0, 510, 700, 20);
      context.fill();
    }
    function wholeCar(carType, tx, ty, cx, cy){
      context.fillText(carType, cx, cy);
      cir(tx, ty, 15, "black");
      cir(tx, ty, 7.5, "white");
      cir(tx, ty, 2.5, "black");
      tyre(tx, ty, angle, "white", 8);
      tyre(tx, ty, angle, "black", 0);

      cir(tx-60, ty, 15, "black");
      cir(tx-60, ty, 7.5, "white");
      cir(tx-60, ty, 2.5, "black");
      tyre(tx-60, ty, angle, "white", 8);
      tyre(tx-60, ty, angle, "black", 0);
    }
    
    
 
    
    
    function cir(x, y, size, color){
      context.beginPath();
      context.fillStyle = color;
      context.ellipse(x, y, size, size, 50, 50, 50);
      context.fill();
    }
    
    function tyre(x, y, angle, color, range, range2){
      context.fillStyle = color;
      context.save();
      context.translate(x, y);
      context.rotate(angle);
      context.translate(range, 0);
      context.fillRect(0, 0, 8, 2);
      context.restore();
    }
    
    
    function animal(type, x, y, angle, range){
      context.save();
      context.translate(x, y);
      context.rotate(angle);
      context.translate(range, 0);
      context.font = "15px serif";
      context.fillText(type, 0, 0);
      context.restore();
    }
    
    
    
    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);

}

window.onload = setup;

