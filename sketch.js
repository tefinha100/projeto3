let cor;
let circuloX;
letcirculoY;

function setup() {
  createCanvas(400, 400);
    background(100,0,0);
  cor =color (random(255), random(255));
  circuloX = [0, 0];
  circuloY = [random(height), random(height)];
}

 function draw() {
    fill(cor); 
    circle(circuloX[0], circuloY[0],50);
    circle (circuloX[1], circuloY[1], 50);
   
 circuloX[0]+= random(0, 3);
 circuloY[0]+= random(-3, 3);
   
   circuloX[1]+= random(0, 3);
   circuloY[1]+= random(-3, 3);s
   if(mouseIsPressed){
cor =color(random(0,255), random(0,255), random(0,255), random(0,100));
   }
   
}