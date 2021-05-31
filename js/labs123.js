var imgId = 0;
var timer = 0;
var imgTxt;

function changeImg() {
  var imgName = (imgId === 0) ? "cat2.jpg" : 
  (imgId === 1) ? "cat3.jpg" :
  (imgId === 2) ? "cat4.jpg" : "cat1.jpg";
  imgId++;
  if (imgId === 4) imgId = 0;
  document.getElementById("img").src="img/" + imgName;
  document.getElementById("imgTxt").innerHTML = imgName;
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

function startTimer() {
  clearInterval(timer);
  timer = setInterval('changeImg()', document.getElementById('DD').value);
}

function stopTimer() {
  clearInterval(timer);
}