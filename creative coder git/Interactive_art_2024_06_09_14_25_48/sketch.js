let colorPalette = ['#FF6B6B', '#FFE66D', '#8AFF8A', '#6B66FF', '#FF6BCC', '#66FFFA']; // New color palette
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(30);

  // Create a new shape at the mouse position
  let shape = {
    x: mouseX,
    y: mouseY,
    size: random(10, 50),
    color: random(colorPalette),
    shapeType: int(random(2)) // 0 for circle, 1 for square
  };
  circles.push(shape);

  // Draw all shapes
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    if (circles[i].shapeType === 0) { // Circle
      ellipse(circles[i].x, circles[i].y, circles[i].size);
    } else { // Square
      rectMode(CENTER);
      rect(circles[i].x, circles[i].y, circles[i].size, circles[i].size);
    }
  }

  // Remove old shapes
  if (circles.length > 100) {
    circles.splice(0, 1);
  }
}

function mousePressed() {
  // Change color palette on mouse press
  shuffle(colorPalette, true); // Randomly shuffle the color palette
}

function keyPressed() {
  // Increase or decrease the size of shapes on key press
  if (keyCode === UP_ARROW) { // Increase size
    for (let i = 0; i < circles.length; i++) {
      circles[i].size += 5;
    }
  } else if (keyCode === DOWN_ARROW) { // Decrease size
    for (let i = 0; i < circles.length; i++) {
      circles[i].size -= 5;
      circles[i].size = max(5, circles[i].size); // Ensure size doesn't go below 5
    }
  }
}
