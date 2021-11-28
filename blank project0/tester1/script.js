
let img;
let cam;
function preload(){
  img=createImage(640, 480)
}

function setup(){
  createCanvas(500, 500)
  cam=createCapture(VIDEO);
}
function draw(){
  background("Yellow");

img.loadPixels();
cam.loadPixels();
//for each row
for (let y=0; y<480; y++){
//for each column
  for (let x  = 0; x<640; x++){
let index = (y*width+x)*4;

let red = cam.pixels[index +0];
let green = cam.pixels[index +1];
let blue = cam.pixels[index+2];

img.pixels[index+0]=red; //g
img.pixels[index+1]=0; //b
img.pixels[index+2]= blue;//r
img.pixels[index+3]= 255;//a
img.updatePixels();
image(img, 0, 0);
}
}
}
