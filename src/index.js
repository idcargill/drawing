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

let color = document.querySelector('#color-pick').value;

// draws line from point to poin given an array
function polyLines(pointList) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.moveTo(pointList[0][0], pointList[0][1]);
	pointList.forEach((i) => {
		ctx.lineTo(i[0], i[1]);
		ctx.stroke();
	});
}

// arg = event listener - triggers createPoly click events
function polyButton(ev) {
	let points = [];
	let colorPicker = document.querySelector('#color-pick');
	colorPicker.addEventListener('input', () => {
		color = colorPicker.value;
	});
	console.log(color);

	function createPoly(ev) {
		const sketch = document.querySelector('canvas');
		const box = sketch.getBoundingClientRect();
		const cX = ev.clientX - box.left;
		const cY = ev.clientY - box.top;
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.fillRect(cX, cY, 1, 1);
		ctx.stroke();
		points.push([cX, cY]);
		polyLines(points);
		console.log(polyOn);
	}
	sketch.addEventListener('click', createPoly);
	document.querySelector('#clear').addEventListener('click', () => {
		points = [];
	});
}

// Draws path following mouse movement
function freeDraw() {
	let drawPoints = [];
	const sketch = document.querySelector('canvas');
	const box = sketch.getBoundingClientRect();
	const drawCtx = sketch.getContext('2d');

	function draw(ev) {
		drawCtx.beginPath();
		const x = ev.clientX - box.left;
		const y = ev.clientY - box.top;
		drawCtx.stroke();
		drawPoints.push([x, y]);
		polyLines(drawPoints);
		console.log(ev);
	}

	sketch.addEventListener('mousemove', draw);
	// sketch.addEventListener('mousemove', () => console.log(ev));

	document.querySelector('#clear').addEventListener('click', () => {
		drawPoints = [];
	});
	document.querySelector('#clear').addEventListener('click', () => {
		let drawPoints = [];
		drawCtx.closePath();
	});
} // freeDraw() //

// Clear Button - clears canvas
function clearAll() {
	ctx.clearRect(0, 0, 400, 400);
}

// Activate Clear Button event
const btn = document.querySelector('#clear');
btn.addEventListener('click', clearAll);

// Activate Polygon Button event
const polyBtn = document.querySelector('#poly-btn');
polyBtn.addEventListener('click', polyButton);

// Activate Free Draw Button event
document.querySelector('#draw').addEventListener('click', freeDraw);
