import '../style/main.css';
import $ from 'jquery';
import pacDraw from './pacman';

const root = $('#root');
// root[0].textContent = 'Jquery fish';

const a = document.createElement('a');
a.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial';
a.innerText = 'Canvas Tutorial';
a.target = '_blank';
root[0].appendChild(a);

const sketch = document.querySelector('#sketch'); // canvas obj
const ctx = sketch.getContext('2d');

const mouseLocation = (ev) => {
  const location = [ev.screenX, ev.screenX];
  console.log([ev.x, ev.y]);
};

// sketch.addEventListener('mousedown', mouseLocation);

function squares() {
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
}
// squares()

function triangle() {
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(150, 75);
  ctx.lineTo(300, 78);
  ctx.lineTo(50, 10);
  ctx.fill();
}
// triangle()

function face() {
  // in Radians
  // arc (x, y, radius, startAngle, endAngle, cc:TorF)
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, false); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
  ctx.stroke();
}

// face();

// line - polygon
function line() {
  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(200, 150);
  ctx.lineTo(250, 125);
  ctx.lineTo(200, 75);
  ctx.lineTo(100, 300);
  ctx.lineTo(300, 300);
  ctx.stroke();
}
// line();

function smirkFace() {
  function outer() {
    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
    ctx.fill();
  }
  outer();

  function leftEye() {
    const ct = sketch.getContext('2d');
    ctx.fillStyle = 'white';
    ct.beginPath();
    ct.arc(170, 170, 15, 0, Math.PI * 2, true);
    ct.fill();

    // pupil
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(173, 173, 5, 0, Math.PI * 2, true);
    ctx.fill();
  }
  leftEye();

  function rightEye() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(210, 170, 15, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(213, 173, 5, 0, Math.PI * 2, true);
    ctx.fill();
  }
  rightEye();

  function mouth() {
    ctx.beginPath();
    ctx.arc(185, 240, 10, 0, Math.PI, false);
    ctx.stroke();
  }
  mouth();
}

// smirkFace();
// pacDraw();

function drawLine(x) {
  ctx.beginPath();
  ctx.lineWidth = x;
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

// drawLine(1);

function fun() {
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.strokeRect(50, 50, 30, 30);
  ctx.strokeRect(70, 50, 30, 30);
  ctx.strokeRect(150, 50, 30, 30);
  ctx.strokeRect(200, 50, 30, 30);
  ctx.fill('evenodd');
}
// fun();

function draw() {
  var ctx = document.getElementById('sketch').getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill('evenodd');
}
// draw();

function mouseDraw(ev) {
  ctx.beginPath();
  console.log(ev);
  const loc = [ev.x, ev.y];
  ctx.moveTo(ev.x, ev.y);
  ctx.stroke();
}

sketch.addEventListener('mousedown', mouseDraw);
