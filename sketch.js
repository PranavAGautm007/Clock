

var hr = hour();
var mn = minute();
var sc = second();
angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,24,0,360);
  stroke(2,0,241);
  strokeWeight(7);
  line(0,0,100,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  stroke(2,255,7);
  strokeWeight(7);
  line(0,0,70,0);
  drawSprites();
}