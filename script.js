function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  fill(255,0,0);
  strokeWeight(2);
  ellipse(350,350,80,80);
  strokeWeight(7);
  line(200,40,20,20);
  strokeWeight(20);
  strokeJoin(ROUND);
  fill(0,376,0);
  rect(50,60,95,70);
  strokeWeight(10);
  fill(0,0,872);
  triangle(200,57,292,31,370,90);
  noFill();
  strokeWeight(13);
  arc(200,180,150,150,0, HALF_PI);
  
}
