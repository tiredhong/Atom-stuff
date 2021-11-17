console.log("very questionable");
let slider= document.getElementById("slider");

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContain");

function draw() {
  //background(0);
  //noStroke();

  let sliderVal=(slider.value);
  console.log(sliderVal.value);
  let h = map(sliderVal, 0, 100, 0, 600);
  bodyShape();
  fill("yellow");
  ellipse(h, 15, 200, 200);

  //scaling
  translate(-40, -80);
  push();
  scale(0.5);
  fill(0);
  beginShape();
  curveVertex(60, 230);
  curveVertex(60, 230);
  curveVertex(61, 200);
  curveVertex(67.5, 180);
  curveVertex(80, 157);
  curveVertex(69, 140);
  curveVertex(64, 118);
  curveVertex(95, 136);
  curveVertex(120, 138);
  curveVertex(141, 180);
  curveVertex(131, 226);
  curveVertex(100, 240);
  curveVertex(100, 240);
  curveVertex(60, 230);
  curveVertex(60, 230);
  endShape();

  //tail
  strokeWeight(0);
  point(61, 200);
  point(45, 198);
  point(59.5, 217);
  strokeWeight(1);

  beginShape();
  curveVertex(61, 200);
  curveVertex(61, 200);
  curveVertex(45, 198);
  curveVertex(59.5, 217);
  curveVertex(59.5, 217);
  endShape();

  //right ear
  strokeWeight(0);
  point(95, 136);
  point(90, 114);
  point(110, 134);
  strokeWeight(1);

  beginShape();
  curveVertex(95, 136);
  curveVertex(95, 136);
  curveVertex(90, 114);
  curveVertex(110, 134);
  curveVertex(110, 134);
  endShape();

  //eyes
  fill(255);
  ellipse(112, 165, 30, 30);
  fill(0);
  ellipse(112, 165, 10, 10);

  fill(0);
  ellipse(120, 245, 40, 20);
  //rotate(frameCount * 0.1);
  ellipse(70, 240, 40, 20);
  pop();
}
function bodyShape() {
  translate(400, 200);
  push();
  //main body
  rotate(frameCount * -0.01);
  strokeWeight(0);
  point(60, 230);
  point(61, 200);
  point(67.5, 180);
  point(80, 157);
  point(69, 140);
  point(64, 118);
  point(95, 136);
  point(120, 138);
  point(141, 180);
  point(131, 226);
  point(100, 240);
  strokeWeight(1);

  fill(255);
  beginShape();
  curveVertex(60, 230);
  curveVertex(60, 230);
  curveVertex(61, 200);
  curveVertex(67.5, 180);
  curveVertex(80, 157);
  curveVertex(69, 140);
  curveVertex(64, 118);
  curveVertex(95, 136);
  curveVertex(120, 138);
  curveVertex(141, 180);
  curveVertex(131, 226);
  curveVertex(100, 240);
  curveVertex(100, 240);
  curveVertex(60, 230);
  curveVertex(60, 230);
  endShape();

  //tail
  strokeWeight(0);
  point(61, 200);
  point(45, 198);
  point(59.5, 217);
  strokeWeight(1);

  beginShape();
  curveVertex(61, 200);
  curveVertex(61, 200);
  curveVertex(45, 198);
  curveVertex(59.5, 217);
  curveVertex(59.5, 217);
  endShape();

  //right ear
  strokeWeight(0);
  point(95, 136);
  point(90, 114);
  point(110, 134);
  strokeWeight(1);

  beginShape();
  curveVertex(95, 136);
  curveVertex(95, 136);
  curveVertex(90, 114);
  curveVertex(110, 134);
  curveVertex(110, 134);
  endShape();

  //eyes
  fill("white");
  strokeWeight(1);
  stroke(0);
  ellipse(112, 165, 30, 30);
  fill("black");
  ellipse(112, 165, 10, 10);

  //feet
  fill(255);
  ellipse(120, 245, 40, 20);
  ellipse(70, 240, 40, 20);

  pop();
}
}
