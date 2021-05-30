var imgId = 0;
var time = 0;
var imgTxt;

var isDown = false;
var x = 0;
var y = 0;

var f;

function initialBtn(input) {
  input.style="background-color: #058e93;";
  const back = () => {
    input.style=""
  }
  setTimeout(back, 300);
};

function changeImg() {
  var imgName = (imgId === 0) ? "cat2.jpg" : 
  (imgId === 1) ? "cat3.jpg" :
  (imgId === 2) ? "cat4.jpg" : "cat1.jpg";
  imgId++;
  if (imgId === 4) imgId = 0;
  document.getElementById("img").src="img/" + imgName;
  document.getElementById("imgTxt").innerHTML = imgName;
}

function startTimer(a) {
  if (a === 0) {
    timer = setInterval('changeImg()', 1000);
  } else {
    timer = setInterval('randDraw(); changeColor()', 1000);
  }
}

function resetTimer(field, a) {
  clearInterval(timer);
  pause = field.value;
  if (a === 0) {
    timer = setInterval('changeImg()', pause);
  } else {
    timer = setInterval('randDraw()', pause);
  }
}

function randDraw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var w = document.getElementById("wth").value;

  x = Math.floor((533 - w) * Math.random());
  y = Math.floor((342 - w) * Math.random());

  document.getElementById("corX").value = x;
  document.getElementById("corY").value = y;

  var colorR = document.getElementById("rangeR").value;
  var colorG = document.getElementById("rangeG").value;
  var colorB = document.getElementById("rangeB").value;

  ctx.fillStyle = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
  ctx.fillRect(x, y, w, w);
}

function tapDraw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var w = document.getElementById("wth").value;

  var x = document.getElementById("corX").value;
  var y = document.getElementById("corY").value;

  var colorR = document.getElementById("rangeR").value;
  var colorG = document.getElementById("rangeG").value;
  var colorB = document.getElementById("rangeB").value;

  ctx.fillStyle = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
  ctx.fillRect(x, y, w, w);
}

function clearDisp() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 533, 342);
}

function changeColor(field) {

  var colorR = 0;
  var colorG = 0;
  var colorB = 0;
  if (field) {
    f = field.id;
  }
  console.log(f);

  if (f === "randAll") {
    colorR = Math.floor(255 * Math.random());
    colorG = Math.floor(255 * Math.random());
    colorB = Math.floor(255 * Math.random());
  } else if (f === "randR") {
    colorR = Math.floor(255 * Math.random());
    colorG = rangeG.value;
    colorB = rangeB.value;
  } else if (f === "randG") {
    colorR = rangeR.value;
    colorG = Math.floor(255 * Math.random());
    colorB = rangeB.value;
  } else if (f === "randB") {
    colorR = rangeR.value;
    colorG = rangeG.value;
    colorB = Math.floor(255 * Math.random());
  } else if (f === "banR") {
    colorR = 0;
    colorG = Math.floor(255 * Math.random());
    colorB = Math.floor(255 * Math.random());
  } else if (f === "banG") {
    colorR = Math.floor(255 * Math.random());
    colorG = 0;
    colorB = Math.floor(255 * Math.random());
  } else if (f === "banB") {
    colorR = Math.floor(255 * Math.random());
    colorG = Math.floor(255 * Math.random());
    colorB = 0;
  } else {
    colorR = rangeR.value;
    colorG = rangeG.value;
    colorB = rangeB.value;
  }
  rangeR.value = colorR;
  rangeG.value = colorG;
  rangeB.value = colorB;
  var color = "rgb(" + colorR + "," + colorG + "," + colorB + ")" ;
  document.getElementById("mycolor").style.backgroundColor = color;
}

function showDescription(combo) {
  var descField = document.getElementById("description");
  switch (combo.value) {
    case "A" : descField.innerHTML = "250 мг"; break;
    case "B" : descField.innerHTML = "100 мг"; break;
    case "C" : descField.innerHTML = "74 мг"; break;
    case "D" : descField.innerHTML = "73 мг"; break;
    case "E" : descField.innerHTML = "3 мг"; break;
  }
}

// function init() {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');

//   document.addEventListener("mouseup", handleUp());
//   document.addEventListener("mousedown", handleDown());
//   document.addEventListener("mousemove", handleMoved());

//   ctx.strokeRect(0,0,533,342);
//   ctx.fillStyle = 'black';
// }

// function handleUp(e) {
//   isDown = false;
// }
// function handleDown(e){
//   isDown = true;
// }
// function handleMoved(e) {
//   if (!isDown) {
//     ctx.clearRect(x,y,20,20);
//   }
//   // x = event.pageX
//   // y = event.pageY;
//   var rect = event.target.getBoundingClientRect();
//   x = event.targetTouches[0].pageX - rect.left;
//   y = event.targetTouches[0].pageY - rect.top;

//   document.getElementById("corX").value = x;
//   document.getElementById("corY").value = y;

//   ctx.fillRect(x,y,20,20);
// }