function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop(); // Ensures the draw function only runs once
}

function draw() {
  let cols = 10; // Number of columns
  let rows = 10; // Number of rows
  let shapeSize = width / cols; // Size of each shape
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * shapeSize;
      let y = j * shapeSize;
      let colorValue = map(x + y, 0, width + height, 0, 255); // Color variation across canvas
      fill(colorValue, 100, 100); // Hue varies, saturation and brightness are constant
      rect(x, y, shapeSize, shapeSize); // Draw square instead of ellipse
    }
  }
}
