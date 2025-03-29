// Make the colour random for every Bubble
// When you click on it
// add another property

let bubble1;
let bubble2;
let square1;
let switchOn = false;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40, 255, 0, 0);
  bubble2 = new Bubble(400, 200, 20, 0, 255, 0);
  square1 = new Square(400,300,50,50)
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  square1.show();
  square1.move();
}

function mousePressed() {
  bubble1.clicked(mouseX, mouseY);
}
