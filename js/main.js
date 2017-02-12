'use strict';

var paint = "blue";
var main = document.querySelector('#canvas');
var toolBar = document.querySelector('#toolbar');
var pixelCount = 0;
var drawing = true;


// creates canvas
(function canvasInit() {
  for ( var i = 0; i < 3000; i++) {
    var pixel = document.createElement('div');
    var id = `px ${pixelCount}`;
    pixel.setAttribute('class', 'pixel');
    pixel.id = id;
    main.appendChild(pixel);
    pixelCount++;
  }
}());

//creates colors
(function color(){
  var colors = "black,blue,green,purple,red,orange,yellow";
  var colorArr = colors.split(",");
  for(var i=0; i<colorArr.length; i++){
    var colorButton = document.createElement('div');
    colorButton.setAttribute('class', 'colorButton');
    colorButton.style.backgroundColor = colorArr[i];
    toolBar.appendChild(colorButton);
  }
}());

//choose color button

function colorPick(ev){
  var clickedColor = ev.target.style.backgroundColor;
  paint = clickedColor;
  document.querySelector('#currentColor').style.backgroundColor = clickedColor;
}
toolBar.addEventListener('mousedown', colorPick, true);



