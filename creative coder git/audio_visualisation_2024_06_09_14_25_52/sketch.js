let song;
let fft;
let spectrum;

function preload() {
  // Load your audio file
  song = loadSound('40-Second Cinematic Intense Trailer Background Music (128kbps).mp3', loaded);
}

function loaded() {
  console.log("Audio file loaded successfully");
  song.play(); // Start playing the audio after it's loaded
}

function setup() {
  createCanvas(800, 400);

  // Set up FFT (Fast Fourier Transform) for audio analysis
  fft = new p5.FFT();
  fft.setInput(song);
}

function draw() {
  background(0);

  // Analyze the frequency spectrum of the audio
  spectrum = fft.analyze();

  // Draw the frequency spectrum as a waveform
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, height, 0);
    vertex(x, y);
  }
  endShape();
}

