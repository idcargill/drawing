import '../style/main.css';
import $ from 'jquery';
import * as ex from './expamples';
import * as help from './helpers';

import smirkFace from './smirkFace';

const root = $('#root');

const a = document.createElement('a');
a.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial';
a.innerText = 'Canvas Tutorial';
a.target = '_blank';
root[0].appendChild(a);

const sketch = document.querySelector('#sketch'); // canvas obj
const ctx = sketch.getContext('2d');

// == EXAMPLES ========================
// help.bubble(ctx, 200, 200, 20);
// help.bubble(ctx, 100, 200, 5);
// smirkFace(ctx);
// ex.pacMan();
// help.triangle([100, 100], [50, 50], [150, 50]);
// help.drawLine([100, 100], [205, 210], 3);
// help.square(100, 200, 100, 20, 'fill');

var points = [];
function polyLines() {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  points.forEach((i) => {
    ctx.lineTo(i[0], i[1]);
    ctx.stroke();
  });
  console.log(points);
}

function createPoly(ev) {
  const box = sketch.getBoundingClientRect();
  const cX = ev.clientX - box.left;
  const cY = ev.clientY - box.top;
  ctx.fillRect(cX, cY, 5, 5);
  ctx.stroke();
  points.push([cX, cY]);
  // console.log(points);
  polyLines();
}

// Clear Button
function clearAll() {
  points = [];
  ctx.clearRect(0, 0, 400, 400);
  sketch.removeEventListener('mousedown', createPoly);
  polyBtn.removeEventListener('mousedown', createPoly);
}
const btn = document.querySelector('#clear');
btn.addEventListener('click', clearAll);

const polyBtn = document.querySelector('#poly-btn');
polyBtn.addEventListener('click', createPoly);
