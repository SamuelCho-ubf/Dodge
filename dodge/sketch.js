let system;

let xCor = 450;
let yCor = 250;
const diameter = 12;

let timeElem;
let result;

var Interval;

function setup() {

  result = createDiv('');
  result.id('result');

  timeElem = createDiv('Time = 0');
  timeElem.id('timer');
  timeElem.time = 0;

  let cnv = createCanvas(900, 500);
  cnv.style('display', 'block');
  cnv.style('margin', 'auto');
  system1 = new ParticleSystem(createVector(0, height));
  system2 = new ParticleSystem(createVector(width, height));
  system3 = new ParticleSystem(createVector(0, 0));
  system4 = new ParticleSystem(createVector(width, 0));
  noLoop();
}

function draw() {
  background(08, 033,053);
  system1.addParticle();
  system1.run();
  system2.addParticle();
  system2.run();
  system3.addParticle();
  system3.run();
  system4.addParticle();
  system4.run();
  fill('red');
  circle(xCor, yCor, diameter);
  updatePlayerCoordinates();
}

function startTimer () {
  timeElem.time++; 
}

function start() {
  timeElem.time = 0;
  xCor = 450;
  yCor = 250;
  system1.particles = [];
  system2.particles = [];
  system3.particles = [];
  system4.particles = [];
  result.html('');
  
  document.getElementById('cover').style.display = 'none';
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  loop();
}

function updatePlayerCoordinates() {
  if (keyIsDown(RIGHT_ARROW) && xCor <= width) {
    xCor += 3;
  } else if (keyIsDown(LEFT_ARROW) && xCor >= 0) {
    xCor -= 3;
  } else if (keyIsDown(UP_ARROW) && yCor >= 0) {
    yCor -= 3;
  } else if (keyIsDown(DOWN_ARROW) && yCor <= height) {
    yCor += 3;
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

  timeElem.html(`Time = ${(timeElem.time/100).toFixed(2)}sec`);
  if (checkPlayerCollision(this.position.x, this.position.y)) {
    noLoop();
    result.html(`Game Over!<br>Your record is: ${(timeElem.time/100).toFixed(2)}sec`);
    document.getElementById('cover').style.display = 'block';
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
