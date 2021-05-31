function drawRectangle(x, y, width, height) {
  x = Number(x);
  y = Number(y);
  width = Number(width);
  height = Number(height);

  var canvas = document.getElementById('canvas 1');
  var ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,600,600);

  ctx.fillStyle = 'black';
  ctx.strokeRect(0,0,600,600);

  ctx.strokeStyle = 'blue'
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + width,y + height);
  ctx.lineTo(x + width,y);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = 'blue'
  ctx.fill();
  ctx.strokeStyle = 'black'
}

var timer;
var r = true;
var g = true;
var b = true

function redCB() {
  r = r ? false : true;
}

function greenCB() {
  g = g ? false : true;
}

function blueCB() {
  b = b ? false : true;
}
function changeDD() {
  var status = document.getElementById("status");
  if (status.innerHTML=="Running")
  {
      startTimer();
  }
  else
  {
      stopTimer();
  }
}
function drawBox() {
  var canvas = document.getElementById('canvas 2');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.strokeRect(0,0,600,600);
}

function clearBox() {
  textField = document.getElementById("status");
  textField.innerHTML = "Clear";
  
  var canvas = document.getElementById('canvas 2');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,600,600);
  drawBox();
}

function draw(rd,gd,bd) {
  textField = document.getElementById("status");
  textField.innerHTML = "Running";

  var canvas = document.getElementById('canvas 2');
  var ctx = canvas.getContext('2d');

  var x = Math.floor(600*Math.random());
  var y = Math.floor(600*Math.random());
  var colorR = rd ? Math.floor(600*Math.random()) : 0;
  var colorG = gd ? Math.floor(600*Math.random()) : 0;
  var colorB = bd ? Math.floor(600*Math.random()) : 0;
  
  ctx.fillStyle = 'rgb(' + colorR + ',' + colorG + ',' + colorB+ ')';
  ctx.fillRect(x,y,30,30);
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval('draw(r,g,b)', document.getElementById('DD').value);
}

function stopTimer() {
  textField = document.getElementById("status");
  textField.innerHTML = "Stoped"
  clearInterval(timer);
}