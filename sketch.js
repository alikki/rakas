let pg;

function setup() {
  createCanvas(700, 400);
  pg = createGraphics(400, 150);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  //fill(255);
  fill(40, 200, 50);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  //pg.background(51);
  //pg.noFill();
  //pg.fill(200, 200, 50);
  pg.fill("#fae");
  //pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}

function mousePressed() {
  pg.background(51);
  pg.text("Timo on rakas", 150, 75);
  //pg.noFill();
  //pg.stroke(255);
  //pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
}
