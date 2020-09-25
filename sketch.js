let angleJaw = 2;
let bamYes = false;
var x = 1
let bone1;
let bone2;
let bone3;
let bone4;


function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES);

  //mic = new p5.AudioIn()
  //mic.start();
  bone1 = new Bone(width * .7, height * .8, 10, .3);
  bone2 = new Bone(width * .3, height * .4, 10, 2);
  bone3 = new Bone(width * .5, height * .3, 8, .4);
  bone4 = new Bone(width * .8, height * .2, 10, 2);
  
}

function draw() {
  //console.log("mic level " + mic.getLevel());
  //console.log("mouse y is: " + mouseY);


  //micLevel = mic.getLevel();
  //angleBoneWag = map(mic.getLevel(), 4, 4, 400, 400);

  background(0, 0, 0);

  bone1.display();
  bone2.display();
  bone3.display();
  bone4.display();
  
  bone1.move();
  bone2.move();
  bone3.move();
  bone4.move();
  

  //right bone 
  //drawBone(micLevel * 200, width * .7, height * .8);
  //left bone
  //drawBone(micLevel * 200, width * .3, height * .4);

  //drawBone(x, width * .5, height * .8, 50);

  x = x + 3;

  if (x >= height) {
    x = 0;
  }

  drawSkullHead();

  drawLeftEye();

  drawLeftPupil();

  drawRightEye();

  drawRightPupil();

  drawBottomJaw(angleJaw);

  drawNose();

  if (bamYes == true) {
    circle(width / 2, height / 2.100);
  }

  //rect(width * .4, height * .05, width * .4, height * .3);

}

function mousePressed() {


  // if the postion of the mouse in inside this region then do this

  if (mouseX > width * 0.4 && mouseX < width * 0.8 && mouseY > height * 0.05 && mouseY < height * .35) {
    console.log("lock jaw");
    angleJaw = -angleJaw;
  } else if (mouseX < width * .4 || mouseX > width * .8) {
    bamYes = !bamYes;
    console.log("chew");
  }

}

function drawSkullHead() {
  //top skull
  //skull color
  fill(246, 240, 88);
  noStroke();
  beginShape();
  vertex(width * .4, height * .2);
  vertex(width * .45, height * .05);
  vertex(width * .7, height * .05);
  vertex(width * .75, height * .2);
  vertex(width * .7, height * .3);
  vertex(width * .7, height * .4);
  vertex(width * .65, height * .4);
  vertex(width * .65, height * .3);
  vertex(width * .60, height * .3);
  vertex(width * .60, height * .4);
  vertex(width * .55, height * .4);
  vertex(width * .55, height * .3);
  vertex(width * .5, height * .3);
  vertex(width * .5, height * .4);
  vertex(width * .45, height * .4);
  vertex(width * .45, height * .3);
  endShape(CLOSE);

}

function drawBottomJaw(rotation) {
  //bottom jaw
  //skull color
  push();
  rotate(rotation);
  fill(246, 240, 88);
  noStroke();
  beginShape();
  vertex(width * .5, height * .55);
  vertex(width * .5, height * .6);
  vertex(width * .7, height * .6);
  vertex(width * .7, height * .5);
  vertex(width * .65, height * .5);
  vertex(width * .65, height * .55);
  vertex(width * .6, height * .55);
  vertex(width * .6, height * .5);
  vertex(width * .55, height * .5);
  vertex(width * .55, height * .55);
  endShape(CLOSE);
  pop();
}

function drawLeftEye() {
  //draw left eye
  fill(255, 0, 0);
  noStroke();
  circle(width * .5, width * .2, width * .07);
}

function drawLeftPupil() {
  //draw left pupil 
  fill(20);
  circle(width * .51, width * .2, width * .03);
}

function drawRightEye() {
  //draw right eye 
  fill(255, 0, 0);
  noStroke();
  circle(width * .65, width * .2, width * .07);
}

function drawRightPupil() {
  //draw right pupil
  fill(20);
  circle(width * .66, width * .2, width * .03);
}

function drawNose() {
  //draw nose 
  fill(20);
  triangle(235, 90, 250, 110, 220, 110);
}