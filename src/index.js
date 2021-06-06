import '../style/main.css';
import $ from 'jquery';

const root = $('#root');
root[0].textContent = 'Jquery fish';

const sketch = document.querySelector('#sketch'); // canvas obj
const ctx = sketch.getContext('2d');

const mouseLocation = (ev) => {
  const location = [ev.x, ev.y];
  console.log(location);
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
};

// sketch.addEventListener('mousedown', mouseLocation);

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);
