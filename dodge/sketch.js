let system;

let xCor = 50;
let yCor = 50;
const diameter = 12;

let timeElem;
let result;

function setup() {
  timeElem = createDiv('Time = 0');
  timeElem.position(20, 150);
  timeElem.id = 'time';
  timeElem.style('color', 'white');
  timeElem.time = 0;

  result = createDiv('');
  result.position(50, 680);
  result.style('font-size', '30px');
  result.style('font-weight', 'bold');
  result.style('color', 'white');
  result.id = 'result';

  createCanvas(900, 500);
  system = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(062,062,084);
  system.addParticle();
  system.run();
  fill('red');
  circle(xCor, yCor, diameter);
  updatePlayerCoordinates();
}


function updatePlayerCoordinates() {
  if (keyIsDown(RIGHT_ARROW) && xCor <= width) {
    xCor += 2;
  } else if (keyIsDown(LEFT_ARROW) && xCor >= 0) {
    xCor -= 2;
  } else if (keyIsDown(UP_ARROW) && yCor >= 0) {
    yCor -= 2;
  } else if (keyIsDown(DOWN_ARROW) && yCor <= height) {
    yCor += 2;
  }
}

function checkPlayerCollision(x, y) {
  if (pow(x-xCor, 2) + pow(y-yCor, 2) < 121) {
    return true;
  }
  return false;
}


// particle class
let Particle = function(position) {
  this.velocity = createVector(random(-2.1, 2.1), random(-1.5, 1.5));
  this.position = position.copy();
};

Particle.prototype.run = function() {
  this.update();
  this.display();

  timeElem.time = `${ (parseInt(frameCount/60) + (frameCount % 60)/100).toFixed(2) }`;
  timeElem.html(`Time = ${timeElem.time}sec`);
  if (checkPlayerCollision(this.position.x, this.position.y)) {
    noLoop();
    textSize(BOLD);
    result.html(`Game Over!<br>Your record is: ${timeElem.time}sec`);
  }
};

// update method
Particle.prototype.update = function(){
  this.position.add(this.velocity);
};

// display method
Particle.prototype.display = function() {
  stroke(200, 255);
  strokeWeight(2);
  fill(127, 255);
  ellipse(this.position.x, this.position.y, 5, 5);
};

Particle.prototype.isDead = function(){
  return this.position.y < 0 || this.position.y > window.innerHeight || this.position.x > window.innerWidth || this.position.x < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
