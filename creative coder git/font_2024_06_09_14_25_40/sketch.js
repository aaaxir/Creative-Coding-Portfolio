var word = "Bath Spa University";
var font1, font2, font3;

function preload() {
  font1 = loadFont("astron boy video.ttf");
 
}

var points;

function setup() {
  createCanvas(1000, 500);

 
  var font = font1;

  stroke(12); 
  
  points = font.textToPoints('Bath Spa University', 100, 300, 100, { sampleFactor: 0.30 });

  background(225);

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, 5, 5);
  }
}
