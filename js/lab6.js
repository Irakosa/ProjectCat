var r;
var g;
var b;

function drawCircleA(n) {
  n = Number(n);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  for (var i=0; i<n; i++)
  {
  ctx.beginPath();
  ctx.arc(300,300,275 - i*10,0,Math.PI*2,true);
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  ctx.strokeStyle = 'rgb('+r+','+g+','+b+')';
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fill();
  }
}

function drawCircleB(n) {
  n = Number(n);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  for (var i=0; i<n; i++)
  {
  ctx.beginPath();
  ctx.arc(300 + i*25,300,275 - i*25,0,Math.PI*2,true);
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  ctx.strokeStyle = 'rgb('+r+','+g+','+b+')';
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fill();
  }
}

function drawBox() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,600,600);
  
  ctx.fillStyle = 'black';
  ctx.strokeRect(0,0,600,600);
}