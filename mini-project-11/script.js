let img;
let cam;

function setup() {
  canvas=createCanvas;
  createCanvas(640,560 );

  cam = createCapture(VIDEO);
  cam.size(600,600)
  //cam.hide();
  img = createImage(width,height);
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();

  let gridSize = 30;
  noStroke();
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {

      let index = (x + y*img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      fill(r, g, b);
      ellipse(x, y,20, gridSize);
    }
  }

}
