function setup() {
  createCanvas(500,500);
  background(240);
  angleMode(DEGREES);
}

function draw() {
  translate(250,250);
  
  stroke(lerpColor(color('#ff8c00'), color('#b0c4de'), frameCount/120));
  strokeWeight(2);
  fill(240);
  rect(cos(frameCount*2)*20,sin(frameCount*2)*20,cos(frameCount*2)*200,sin(frameCount*2)*200);
  
  if(frameCount == 360/2) {
    noLoop();
  }
}