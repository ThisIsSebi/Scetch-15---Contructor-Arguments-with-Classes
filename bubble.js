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