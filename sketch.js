<!DOCTYPE html>
<html>
<head>
<style>
  <meta charset="UTF-8">
  <script language="javascript" type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js"></script>
  
  <script language="javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/addons/p5.sound.min.js"></script>
  <script language="javascript" type="text/javascript" src="sketch.js"></script>
var song;
var sliderRate;
var sliderPan;

function setup() {
  createCanvas(200, 200);
  song = loadSound('acid dreams.mp3', loaded);
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(random(255));
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}

