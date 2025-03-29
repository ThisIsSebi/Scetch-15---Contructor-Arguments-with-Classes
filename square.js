class Square{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    show(){
        fill(0)
        rect(this.x, this.y, this.width, this.height)
    }

    move(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5)
    }
}