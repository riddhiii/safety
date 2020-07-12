var bg


function preload(){
bg=loadImage("playg.png");
}

function setup(){
    createCanvas(800,800);

}



function draw(){
background("black");
image(bg,600,500);



drawSprites()
}