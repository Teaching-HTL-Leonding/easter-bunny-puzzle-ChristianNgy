import p5 from 'p5';
let bunnyImage: p5.Image;

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
});

function preload() {
  bunnyImage = p.loadImage('https://cddataexchange.blob.core.windows.net/data-exchange/bunny.png');
}
function setup() {
  p.createCanvas(500, 500);
  p.background('red');
}

function draw() {
  p.background('white');
  p.stroke('white');
  p.noFill();
  p.strokeWeight(2);

  for (let y = 0; y <= 500; y += 100) {
    for (let x = 0; x <= 500; x += 100) {
      p.image(bunnyImage, 0 + x, 0 + y, 100, 100, 0 + x, 0 + y, 100, 100);
        p.rect(0 + x, 0 + y, 100, 100);
    }
  }
}
