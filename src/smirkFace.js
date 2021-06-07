function smirkFace(ctx) {
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

export default smirkFace;
