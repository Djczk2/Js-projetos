function setup() {
    createCanvas(400, 400);
    
    angleMode(DEGREES);
  }
  
  function draw() {
    background("rgb(0,0,0)")
    translate(width/2, height/2)
    rotate(-90)
    
    let hr = hour();
  let mn =  minute();
   let = second();
  
  strokeWeight(8);
  noFill();
  
    stroke("purple")
    let secondAngle = map(hr % 12,0,12,0,360);
   arc(0, 0, 300, 300, 0, secondAngle);
    
      stroke("rgb(204,2,204)")
    let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);
    
    
     stroke("rgb(29,5,29)");
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 260, 260, 0, hourAngle);
    
   push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();
  
    push();
    rotate(minuteAngle);
    stroke(100, 150, 255);
    line(0, 0, 75, 0);
    pop();
  
    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();
    
    
    stroke(255);
    point(0,0)
    
    
  }