// Make the colour random for every Bubble
// When you click on it
// add another property

let bubble1;
let bubble2;
let switchOn = false;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40, 255, 0, 0);
  bubble2 = new Bubble(400, 200, 20, 0, 255, 0);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

function mousePressed() {
  bubble1.clicked(mouseX, mouseY);
}

class Bubble {
  constructor(x, y, r, colourX, colourY, colourZ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colourX = colourX;
    this.colourY = colourY;
    this.colourZ = colourZ;
    this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.colourX, this.colourY, this.colourZ);
    ellipse(this.x, this.y, this.r * 2);
  }

  clicked(mouseX, mouseY){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.r){
      this.colourX = 0;
      this.colourY = 255;
      this.colourZ = 0;
      switchOn = true;
    } else if(switchOn){
      this.colourX = 255;
      this.colourY = 0;
      this.colourZ = 0;
    }
  }
}
