let x,y,r;

function setup() {
  createCanvas(500, 450);
  background('#403075');
  noStroke();
  y = 0;
}

// let x = 0;
// function draw() {
//   background('#403075');
//   circle(x, height/2, 50);
//   x++;
// }

function draw() {

  x = random(width);
  if(random() > 0.6) {
    r = random(6, 10);
  } else {
    r =random(1, 5);
  }

  circle(x,y,r);
  y += 3;

  if (y > 450) {
    y = 0;
  }
}
