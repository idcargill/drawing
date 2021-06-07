export { default as pacMan } from './pacMan';

export function face() {
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
