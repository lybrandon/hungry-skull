class Bone {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size= _size;
  
  }

  display() {
    //bone
    // set bone color
    noStroke();
    fill(25, 250, 40);
    //bone rotating
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rectMode(CENTER);
    rect(0, 0, width * .3, width * .06);
    circle(-width * .15, -height * .04, -height * .08);
    circle(-width * .15, height * .04, -height * .08);
    circle(width * .15, -height * .04, -height * .08);
    circle(width * .15, height * .04, -height * .08);
    pop();
  }

  
  move(){
    
    //this.angle++_is shorthand for this.angle = this.angle+1
    this.rotation++;
    
    if (this.yPos <= height * 1.3){
    //this.yPos = thisyPos +2;
    //shorthand below is +=
    this.yPos += 2;
    } else {
      this.yPos = -height * .8;
    }
  }
}