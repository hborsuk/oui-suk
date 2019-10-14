// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage("Ouisuk-small.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);

}

function draw() {
  background(0);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}

function increaseSpeed(){
  createCanvas(windowWidth, windowHeight);
  if(xspeed < 0)
  {
    xspeed--;
  }
  else if (xspeed > 0)
  {
    xspeed++;
  }
  
  if(yspeed > 0)
  {
    yspeed++;
  }
  else if(xspeed < 0)
  {
    yspeed--;
  }
  pickColor();
}

function increaseSpeedby(num){
  createCanvas(windowWidth, windowHeight);
  if(xspeed < 0)
  {
    xspeed=xspeed-num;
  }
  else if (xspeed > 0)
  {
    xspeed=xspeed+num;
  }
  
  if(yspeed > 0)
  {
    yspeed = yspeed + num;
  }
  else if(xspeed < 0)
  {
    yspeed = yspeed - num;
  }
  pickColor();

  print("Speed = " + Math.abs(xspeed) + ", " + Math.abs(yspeed));
}
