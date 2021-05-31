var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  textSize(25);
  fill("white");
  text("Score " + ": " + score, 500, 50);


  // Add code to display the end screen
  if(score === 3){
    background(bg2);
    textSize(40);
    fill("white");
    text("Treasure Unlocked",400, 200)
  }


  drawSprites()
}

