var canvas;
var ctx;
var color = 'red'

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0,0,640,480);
  document.getElementById('mycolor').style.backgroundColor = color;
  document.addEventListener("keydown", changeColor);
  document.addEventListener("mousedown", putLine);
  document.addEventListener("mousemove", showXY);
}

function changeColor(event) {
  if (event.keyCode == 49) {
    color = 'red';
    document.getElementById('mycolor').style.backgroundColor = color;
    document.getElementById('mycolor').value = "color - red (1)"
  }

  if (event.keyCode == 50) {
    color = 'green';
    document.getElementById('mycolor').style.backgroundColor = color;
    document.getElementById('mycolor').value = "color - green (2)"
  }
  
  if (event.keyCode == 51) {
    color = 'blue';
    document.getElementById('mycolor').style.backgroundColor = color;
    document.getElementById('mycolor').value = "color - blue (3)"
  }
}

function putLine(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(x,y);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function showXY() {            
  var x = event.offsetX;
  var y = event.offsetY;
  document.getElementById("x").value = "x=" + x;
  document.getElementById("y").value = "y=" + y;
}