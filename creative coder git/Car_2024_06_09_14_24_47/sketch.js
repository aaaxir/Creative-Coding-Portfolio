function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Car body
  fill(70, 130, 180);
  rect(100, 220, 200, 50, 10); 
  rect(130, 190, 140, 40, 10); 

  // Wheels
  fill(0); // Black color for tires
  ellipse(150, 270, 40, 40); 
  ellipse(250, 270, 40, 40); 
  
  // Wheel rims
  fill(160); // Gray color for rims
  ellipse(150, 270, 20, 20); 
  ellipse(250, 270, 20, 20); 
  
  // Windows
  fill(255); // White color for windows
  rect(140, 200, 40, 20); 
  rect(220, 200, 40, 20); 
  
  // Headlights
  fill(255, 255, 100); 
  ellipse(95, 240, 10, 10); 
  
  // Tail lights
  fill(255, 0, 0); 
  ellipse(95, 260, 10, 10); 
  
  // Door handles
  fill(50); // Dark gray color
  rect(180, 240, 15, 3, 2); 
  rect(205, 240, 15, 3, 2); 
  
  
}
