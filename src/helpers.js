export function point(ev) {
  ctx.beginPath();
  const box = sketch.getBoundingClientRect();
  const cX = ev.clientX - box.left;
  const cY = ev.clientY - box.top;
  ctx.fillRect(cX, cY, 5, 5);
  ctx.stroke();
}

export function triangle(start, pt1, pt2) {
  const sketch = document.querySelector('#sketch');
  let ctx = sketch.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(start[0], start[1]);
  ctx.lineTo(pt1[0], pt1[1]);
  ctx.lineTo(pt2[0], pt2[1]);
  ctx.fill();
}

export function drawLine(pt1, pt2, w) {
  const sektch = document.querySelector('canvas');
  let ctx = sketch.getContext('2d');
  ctx.beginPath();
  ctx.lineWidth = w;
  let x1 = pt1[0];
  let y1 = pt1[1];
  let x2 = pt2[0];
  let y2 = pt2[1];
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export function square(x, y, w, h, fill) {
  const sketch = document.querySelector('canvas');
  let ctx = sketch.getContext('2d');
  ctx.beginPath();
  let type = fill;

  if (fill === 'stroke') {
    ctx.strokeRect(x, y, w, h);
  }

  if (fill === 'fill') {
    ctx.fillRect(x, y, w, h);
  }
}

export function bubble(ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, true);
  ctx.stroke();
}
