let img;
let slider;
function preload(){
  img=loadImage("bing.png");
}
function setup() {
  let canvas=createCanvas(600,600);
  canvas.parent("eater");
  slider = createSlider(2, 255, 255);
  slider.position(300, 500);
  slider.style('width', '80px');

}

function draw() {

  let val = slider.value();
  background(0);


  noStroke();
  fill("pink");
  ellipse(300,570, width+40, 300);

  strokeWeight(2);
  fill(255);
  rect(width,height*0.2, width, 700);
  rect(0,height*0.85, width, 300);
  rect(0,height*0.15, width, 100)
  image(img, 300,300,val, val);



}
