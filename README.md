# workshop-task-7
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-7/)

## Task
- Build a simulation of a real or imagined entity or environment.
- Experiment with random walks and/or particle systems in your sketch.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.
  
## Overview
- learning new function about random walks and the particle system
- Experimenting with the random walk

## Workshop Notes

### Ojects

```ruby
let ball = {
x : 200,
y : 200
}

function setup(){
  createCanvas(400,400);
}

function draw(){
   background(220);
}

function move(){
  ball.x = ball.x + random(-4,4);
  ball.y = ball.y + random(-4,4);
}

function show(){
    fill(255,255,0);
    noStroke();
    ellipse(ball.x, ball.y,30,30);
}
```
1 ball moving

<img width="400" alt="Screenshot 2025-01-28 at 2 22 52 PM" src="https://github.com/user-attachments/assets/7ffadce6-6831-4798-b1e2-b09549c5694b" />


Instant called as a class, a blueprint to create certain type of object (if want to make more than 1 and write code more efficient)

```ruby
let ball1, ball2;

function setup(){
  createCanvas(400,400);
  ball1 = new Ball;
  ball2 = new Ball;
}

function draw(){
  background(220);
  ball1.move();
  ball1.show();
  ball2.move();
  ball2.show();
}

class Ball {

  constructor(){
    this.x = 100;
    this.y = 100;
    }

  move(){
    this.x = this.x + random(-4,4);
    this.y = this.y + random(-4,4);
}
show() {
  fill(255,255,0);
  noStroke();
  elliplse(this.x, this.y, 30,30);
}
}
```
2 Moving Balls 

<img width="400" alt="Screenshot 2025-01-28 at 2 22 21 PM" src="https://github.com/user-attachments/assets/428dd76d-f04a-41fc-a329-5a33af553f0b" />

Avoid the balls moving over the screen, another function

```ruby

let ball1, ball2;

function setup(){
  createCanvas(400,400);
  ball1 = new Ball;
  ball2 = new Ball;
}

function draw(){
  background(220);
  ball1.move();
  ball1.show();
  ball1.checkEdges();
  ball2.move();
  ball2.show();
  ball2.checkEdges();
}

class Ball {

  constructor(){
    this.x = 100;
    this.y = 100;
    }

  move(){
    this.x = this.x + random(-4,4);
    this.y = this.y + random(-4,4);
}
show() {
  fill(255,255,0);
  noStroke();
  elliplse(this.x, this.y, 30,30);
}
checkEdges(){
  if(this.x<15){
    this.x = 15; // reset the x value
  }else if (this.x>width-15){
    this.x = width -15;
  }
  if(this.y<15){
    this.y = 15
  } else if (this.y>height-15){
    this.y = height-15;
  }
}
}
```
Control the 2 balls starting point
```ruby
changes on the
ball1 = new Ball(50,50);
ball2 = new Ball(200,300);

and classBall {
constructor (x,y){
  this.x = x;
  this.y = y;
}
```

<img width="400" alt="Screenshot 2025-01-28 at 6 22 27 PM" src="https://github.com/user-attachments/assets/83fee89b-d41a-4583-9dcd-8075b5de9ab0" />

Adding new Parameters
```ruby
changing the Ball1 = new Ball(50,50,10);
ball 2 = new Ball2(200,300,50);


show(){
etc
ellipse(this.x, this.y, this.r, this.r);
}


and classBall {
constructor (x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;
}
```
Declare objects in Array
```ruby
let ballSystem = [];

function setup() {
  createCanvas(400,400);
  for(x=0; x<30; x++){ //30 ellipse gonna be drawn
    let rx = random(15,width -15);
    let ry = random(15, height-15);
    let rr = random(10,50);
    ballSystem[x] = new Ball(rx, ry, rr);
  }
}

function draw () {
  background(220);
  for(x = 0; x< ballSystem.length; x++){
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
}
}

class Ball {

  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

move(){
  this.x = this.x + random(-4,4);
  this.y = this.y + random(-4,4);
}

show (){
  fill(255,255,0);
  noStroke();
  ellipse( this.x, this.y, this.r, this.r);
}

```
<img width="400" alt="Screenshot 2025-01-28 at 6 49 28 PM" src="https://github.com/user-attachments/assets/81109fb7-b414-43a8-bfe2-a6a9f123fa3b" />


Another example
```ruby
let walkers = [];

function setup() {
  createCanvas(400,400);
  background(0);
  for(i=0; i<20; i ++){
    let x = random(0, width);
    let y = random(0,height);
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    walker[i] = new Walker(x,y, r, g, b);
  
  }
}

function draw () {
  for(x = 0; x<walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
}
}

class Walker {
    construnctor(x,y, r,g,b){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
}

step(){
  this.x += random(-1,1);
  this.y += random(-1,1);
}

show(){
  strokeWeight(2);
  stroke(this.r,this.g, this.b);
  point(this.x, this.y);
}
```
<img width="400" alt="Screenshot 2025-01-28 at 6 49 08 PM" src="https://github.com/user-attachments/assets/6652a8e2-6165-401a-8238-32de9696cf9f" />

If including the rgb 

<img width="400" alt="Screenshot 2025-01-28 at 6 52 55 PM" src="https://github.com/user-attachments/assets/b684890a-075f-47f1-9ed9-405a10886c8e" />


## Task Journey
Trying to using (png images) and apply them into the function [https://pngtree.com/freepng/cute-head-duck-doodle-sticker_9068657.html]

### Process 2
Trying to use duck stickers from png, and making them moveing down 
```ruby
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
    walkers[i] = new Walker(x, y,255); // Use 'walkers' instead of 'walker'
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
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
  }

  show() {
    image(duck, this.x, this.y, 20, 20);
  }
}

```

<img width="602" alt="Screenshot 2025-01-31 at 3 23 49 PM" src="https://github.com/user-attachments/assets/4342a9ae-cb96-42ed-a4b5-ebda7d4299ad" />

### Process 3
Experimenting instead of making a stamp of ducks, how to make them moving down to right
adding background under the drawing to reset the background on every frame

<img width="400" alt="Screenshot 2025-01-31 at 3 28 21 PM" src="https://github.com/user-attachments/assets/1e524420-ed27-452c-abca-248dbbadcedc" />

### Process 4
Want to apply the function to not going out of the canvas
```ruby
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
```

<img width="400" alt="Screenshot 2025-01-31 at 3 28 21 PM" src="https://github.com/user-attachments/assets/96c21848-8bed-45b9-9d30-98a8b6c48ef0" />


### Commentaries
- It was a new function to learn, experimenting wit hthe random walk.
- Instead of making the range movement negative and positive, I made it all positive with a range 1 to 2, and in the ened, they ducks stucks at the edge

## Future Development
- Maybe adding some next scene about what happen if one or all of the ducks stuck on the edge of the screen. (Was thinking changing the character, and starting to moving randomly to the other canvas corner.

