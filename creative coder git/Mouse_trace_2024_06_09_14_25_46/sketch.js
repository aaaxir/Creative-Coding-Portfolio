let trail = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  
  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 255, 0);
    let shapeSize = map(i, 0, trail.length, 10, 50);
    let shapeColor = [map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 150];
    
    fill(shapeColor[0], shapeColor[1], shapeColor[2], transparency);
    noStroke();
    
    // Alternate between rectangles and circles
    if (i % 2 === 0) {
      rectMode(CENTER);
      rect(trail[i].x, trail[i].y, shapeSize, shapeSize);
    } else {
      ellipseMode(CENTER);
      ellipse(trail[i].x, trail[i].y, shapeSize, shapeSize);
    }
  }
  
  // If mouse is pressed, add a new element to the trail
  if (mouseIsPressed) {
    trail.push({x: mouseX, y: mouseY});
    
    // Limit the trail length
    if (trail.length > 100) {
      trail.splice(0, 1);
    }
  }
}
