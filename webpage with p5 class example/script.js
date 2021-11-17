console.log("scriptworks! whee!")
let circleslider = document.getElementById("circleSlider");
let circleslider2 = document.getElementById("circleSlider2");



function setup(){
  let canvas = createCanvas(400,400);
  canvas.parent("canvasContainer");

}
function draw(){
  background(0);
  fill("lightblue");

  let sliderVal =(circleSlider.value);
  let sliderVal2 =(circleSlider2.value);
  console.log(circleSlider.value);
  let x = map(sliderVal, 0, 100, 0, width);
  let z =map(sliderVal2, 0, 100, 0, width);
  circle(x, height/2, z);


}
