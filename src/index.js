import '../style/main.css';
import Canvas from './sketchFace';
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

// Cavas
const sketch = document.querySelector('#sketch');
const ctx = sketch.getContext('2d');
const box = sketch.getBoundingClientRect();

// COLOR SELECTOR
let color = '';
let colorPicker = document.querySelector('#color-pick');
colorPicker.addEventListener('change', () => {
	let color = colorPicker.value;
	console.log(color);
});

// BRUSH SIZE
let brushSize = 1;
let brush = document.querySelector('#brush');
brush.addEventListener('change', () => {
	let brushSize = brush.value;
	console.log(brushSize);
});

function freeHand(ev) {
	ctx.beginPath();
	const x = ev.clientX - box.left;
	const y = ev.clientY - box.top;
	ctx.moveTo(x, y);
	ctx.fillStyle = colorPicker.value;
	ctx.arc(x, y, brush.value, 0, Math.PI * 2, true);
	ctx.fill();
}

// START DRAWING on mouse down and move
sketch.addEventListener('mousedown', () => {
	sketch.addEventListener('mousemove', freeHand);
});

// STOP DRAWING event listner on mouse up
sketch.addEventListener('mouseup', () => {
	sketch.removeEventListener('mousemove', freeHand);
});

// Clear Button - clears canvas
function clearAll() {
	ctx.clearRect(0, 0, 800, 800);
}

// Activate Clear Button event
const btn = document.querySelector('#clear');
btn.addEventListener('click', clearAll);

// == EXAMPLES ========================
// help.bubble(ctx, 200, 200, 20);
// help.bubble(ctx, 100, 200, 5);
// smirkFace(ctx);
// ex.pacMan();
// help.triangle([100, 100], [50, 50], [150, 50]);
// help.drawLine([100, 100], [205, 210], 3);
// help.square(100, 200, 100, 20, 'fill');

// draws line from point to poin given an array
// function polyLines(pointList) {
// 	ctx.beginPath();
// 	ctx.fillStyle = color;
// 	ctx.moveTo(pointList[0][0], pointList[0][1]);
// 	pointList.forEach((i) => {
// 		ctx.lineTo(i[0], i[1]);
// 		ctx.stroke();
// 	});
// }

// arg = event listener - triggers createPoly click events
// function polyButton(ev) {
// 	let points = [];
// 	let colorPicker = document.querySelector('#color-pick');
// 	colorPicker.addEventListener('input', () => {
// 		color = colorPicker.value;
// 	});
// 	console.log(color);

// 	function createPoly(ev) {
// 		const sketch = document.querySelector('canvas');
// 		const ctx = sketch.getContext('2d');
// 		const box = sketch.getBoundingClientRect();
// 		const cX = ev.clientX - box.left;
// 		const cY = ev.clientY - box.top;
// 		ctx.beginPath();
// 		ctx.strokeStyle = color;
// 		ctx.fillRect(cX, cY, 1, 1);
// 		ctx.stroke();
// 		points.push([cX, cY]);
// 		sf.polyLines(points, ctx, color);
// 	}
// 	sketch.addEventListener('click', sf.createPoly(color));
// 	document.querySelector('#clear').addEventListener('click', () => {
// 		points = [];
// 	});
// }

// Draws path following mouse movement

// function freeDraw() {
// 	let drawPoints = [];
// 	const sketch = document.querySelector('canvas');
// 	const box = sketch.getBoundingClientRect();
// 	const drawCtx = sketch.getContext('2d');

// 	function draw(ev) {
// 		drawCtx.beginPath();
// 		const x = ev.clientX - box.left;
// 		const y = ev.clientY - box.top;
// 		drawCtx.stroke();
// 		drawPoints.push([x, y]);
// 		polyLines(drawPoints);
// 		console.log(ev);
// 	}

// 	sketch.addEventListener('mousemove', draw);
// 	// sketch.addEventListener('mousemove', () => console.log(ev));

// 	document.querySelector('#clear').addEventListener('click', () => {
// 		drawPoints = [];
// 	});
// 	document.querySelector('#clear').addEventListener('click', () => {
// 		let drawPoints = [];
// 		drawCtx.closePath();
// 	});
// } // freeDraw() //

// // Activate Polygon Button event
// const polyBtn = document.querySelector('#poly-btn');
// polyBtn.addEventListener('click', polyButton);

// // Activate Free Draw Button event
// document.querySelector('#draw').addEventListener('click', freeDraw);
