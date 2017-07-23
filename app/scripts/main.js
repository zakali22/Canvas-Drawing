var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;

let isDraw = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDraw) {
    return;
  }
  context.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
  context.beginPath();
  // start from
  context.moveTo(lastX, lastY);
  // go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  console.log(e);
  hue++;
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousedown', function(e) {
  isDraw = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function() {
  isDraw = false;
});

canvas.addEventListener('mouseout', function() {
  isDraw = false;
});
