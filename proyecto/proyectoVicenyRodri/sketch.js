function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2*mouseY+mouseX*2,mouseX,mouseY*0.5,35);
  fill(mouseX/2,mouseY/2,(mouseX+mouseY)/2);
  ellipse(mouseX,mouseY,mouseX/2,mouseY/2);
}