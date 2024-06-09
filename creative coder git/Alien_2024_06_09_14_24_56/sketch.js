function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30); 

  // Alien head
  fill(50, 205, 50); 
  ellipse(200, 150, 120, 160); 

  // Eyes
  fill(0); 
  ellipse(170, 140, 30, 50); 
  ellipse(230, 140, 30, 50);
  
  // Antennae
  stroke(50, 205, 50); 
  strokeWeight(4);
  line(170, 80, 150, 50); 
  ellipse(150, 50, 15, 15); 
  line(230, 80, 250, 50); 
  ellipse(250, 50, 15, 15); 
  noStroke();
  
  // Alien body
  fill(34, 139, 34); 
  ellipse(200, 280, 100, 140); 
  
 
}
