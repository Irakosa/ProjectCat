var x=50, y=50;
var spacePressed = false;
var canvas;
var ctx;

function reset() {
  x = 50; y = 50;
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,640,480);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0,0,640,480);
  ctx.fillStyle = 'blue';
  ctx.fillRect(x,y,20,20);
  spacePressed = false;
  document.getElementById("x").value = "x=" + x;
  document.getElementById("y").value = "y=" + y;
  document.getElementById("spaceStatus").value = "Show track: off";
  document.getElementById('mycolor').style.backgroundColor = 'blue';
  document.getElementById('mycolor').value = "color - blue (3)";
}

function spaceStatusChange() {
  if (spacePressed) {
    spacePressed = false;
    document.getElementById("spaceStatus").value = "Show track: off";
  } else {
    spacePressed = true;
    document.getElementById("spaceStatus").value = "Show track: on";                
  }
}

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0,0,640,480);

  ctx.fillStyle = 'blue';
  ctx.fillRect(x,y,20,20);
  
  document.addEventListener("keydown", move);
  document.getElementById('mycolor').style.backgroundColor = 'blue'
  document.getElementById("x").value = "x=" + x;
  document.getElementById("y").value = "y=" + y;

}

function move(event) {

  if (event.keyCode == 49) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,20,20);
    document.getElementById('mycolor').style.backgroundColor = 'red';
    document.getElementById('mycolor').value = "color - red (1)";
  }

  if (event.keyCode == 50) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x,y,20,20);
    document.getElementById('mycolor').style.backgroundColor = 'green';
    document.getElementById('mycolor').value = "color - green (2)";
  }

  if (event.keyCode == 51) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,20,20);
    document.getElementById('mycolor').style.backgroundColor = 'blue';
    document.getElementById('mycolor').value = "color - blue (3)";
  }

  if (event.keyCode == 27) {reset();}
  if (event.keyCode == 32) {spaceStatusChange();}

  if (spacePressed) {
    if (event.keyCode == 38) {y-=5;}
    if (event.keyCode == 40) {y+=5;}
    if (event.keyCode == 39) {x+=5;}
    if (event.keyCode == 37) {x-=5;}
  } else {
    ctx.clearRect(x,y,20,20);
    if (event.keyCode == 38) {y-=5;}
    if (event.keyCode == 40) {y+=5;}
    if (event.keyCode == 39) {x+=5;}
    if (event.keyCode == 37) {x-=5;}
  }

  document.getElementById("x").value = "x = " + x;
  document.getElementById("y").value = "y = " + y;
  //document.getElementById("x").value = x;
  //document.getElementById("y").value = y;

  ctx.fillRect(x,y,20,20);
}