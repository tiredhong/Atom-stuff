
function say(what){
  //console.log("What does the fox say: " + what);
  //programtically slecting an HTML element
  let elem = document.getElementById('lyrics');
  console.log(elem);
  //creates a new paragraph element
  let newElem = document.createElement('p');

newElem.innerHTML = what;

  elem.appendChild(newElem);
}

function makeCircle(){
  let elem = document.getElementById('rect');
  //border--radius
  elem.style.borderRadius= '50px';

}
function makeRect() {
  let elem = document.getElementById('rect');
  elem.style.borderRadius= '0px';
}

let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click',makeCircle);

let rectButton = document.getElementById('rectButton');
rectButton.addEventListener('click',makeRect);
