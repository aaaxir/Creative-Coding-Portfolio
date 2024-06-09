let data; // variable to hold population data

function preload() {
  // Load the population data
  data = loadJSON('population.json');
}

function setup() {
  createCanvas(800, 600);
  background(240);
  // Draw the bar graph
  drawBarGraph();
}

function drawBarGraph() {
  let years = Object.keys(data); // Get the years from the data
  let populations = Object.values(data); // Get the populations from the data

  // Find the maximum population for scaling
  let maxPopulation = Math.max(...populations);

  // Calculate the width of each bar
  let barWidth = width / years.length;

  // Loop through the years and draw bars
  for (let i = 0; i < years.length; i++) {
    let x = i * barWidth; // x-coordinate of the bar
    let h = map(populations[i], 0, maxPopulation, 0, height); // height of the bar

    // Assign a color based on the population growth
    let fillColor = map(populations[i], 0, maxPopulation, 0, 255);
    fill(fillColor, 100, 200);

    // Draw the bar
    rect(x, height - h, barWidth, h);
  }
}
