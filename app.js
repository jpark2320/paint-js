const canvas = document.getElementById('jsCanvas');

let isPainting = false;

function onMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
}

function onMouseDown(e) {
  isPainting = true;
}

function onMouseUp(e) {
  isPainting = false;
}

function onMouseLeave(e) {
  isPainting = false;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseleave', onMouseLeave);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
}
