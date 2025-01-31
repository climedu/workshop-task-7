let walkers = [];
let duck;

function preload(){
  duck = loadImage('images/duck.png');
  }
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  for (let i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(0, height);
    walkers[i] = new Walker(x, y); // Use 'walkers' instead of 'walker'
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // clear the background each frame
  for (let x = 0; x < walkers.length; x++) {
    walkers[x].step();
    walkers[x].show();

  }
}


class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    this.x += random(1,2);
    this.y += random(1,2);
  
    // make it not going out of the canvas
    this.x = constrain(this.x, 0, width - 20);
    this.y = constrain(this.y, 0, height - 20);
  }

  show() {
    image(duck, this.x, this.y, 20, 20);
  }
}
