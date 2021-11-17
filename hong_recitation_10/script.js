
let myFace;
let yourFace;
function setup() {
  let canvas = createCanvas(1370, 400);
  canvas.parent("canvasContainer");
myFace = new Face(900,100);
yourFace = new Face(1200,200);
}
/*This was used from the website:How to Create Color Picker in Javascript and HTML the link: https://www.fwait.com/how-to-create-color-picker-in-javascript-and-html/ This helped me with color picking, and I changed some aspects to help make only the balls change*/
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
    //document.body.style.backgroundColor = black;
    //document.querySelector('canvasContainer').style.color = color;
    //document.querySelector('text').style.color = color;
});

function draw() {
  background(0);

  myFace.update();
  myFace.display();

  yourFace.update();
  yourFace.display();
}
class Face{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.radius = 80;
    this.speed = 5;
  //this.color = elem.style.color;
  }
  update(){
    this.x = this.x +this.speed;
    if(this.x > width || this. x < 0){
      this.speed = this.speed *-1;
    }
  }
  display(){
    //fill(this.color);
fill(colorInput.value);
    circle(this.x, this.y, this.radius);
  }
}
