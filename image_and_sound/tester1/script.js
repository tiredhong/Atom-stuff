

let img;
let imgArray=[];
let horseX =100;
let horseIndex=0;
function preload(){

for(let i=1; i<12; i++){
  let path="assests/images/horse"+i+".jpg";
  console.log("loading",path)
  loadImage(path);
  imgArray.push(img);
}
console.log(imgArray);
//img= loadImage("a
//assests/images/horse1.jpg");
}

function setup(){
  createCanvas(1000,300);
}


function draw(){
  background(0);
  img(imgArray[horseIndex], 0, 0, 200, 150);
  horseIndex++;
  if(horseIndex>10){
    horseIndex=0;

  }
  // image(img,horseX,0, 200,200);
  //
  // horseX++;
  // if(horseX>width){
  //   horseX=-200;
  // }
}
