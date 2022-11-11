darkside_song = "";
hp_song = "";
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCaputure(VIDEO);
    video.hide();
}

function preload(){
    darkside_song = loadSound("Neoni_Darkside.mp3");
    hp_song = loadSound("Harry_Potter.mp3");
}

function draw(){
    image(video,0,0,600,530)
}