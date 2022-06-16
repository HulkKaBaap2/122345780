song1="";
song2="";
function preload(){
    song = loadSound("doremon.mp3");
    song2=loadSound("shinchan.mp3");
}

function setup(){

    canvas=createCanvas(600,500);
    canvas.center();
   
    video =createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(VIDEO, 0 ,0 ,600, 500);
}