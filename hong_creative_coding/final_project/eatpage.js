let img;
let slider;
function preload(){
  img=loadImage("bing.png");
}
function setup() {
  let canvas=createCanvas(600,600);
  canvas.parent("eater");
  slider = createSlider(0, 255, 200);
  slider.position(300, 500);
  slider.style('width', '80px');

}

function draw() {
  background(255);
  let val = slider.value();
  background(255);
  image(img, 300,300,val);

}
