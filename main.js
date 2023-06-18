noseX=0;
noseY=0;
function draw(){
    
image(video,0,0,400,400);
image(mustache,noseX,noseY,70,70);
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log("results");
    noseX=results[0].pose.nose.x+15;
    noseY=results[0].pose.nose.y+45;
   
}
}

function preload(){
mustache=loadImage("https://i.postimg.cc/RVhGdNZL/fu-manchu-moustache-fu-manchu-moustache-computer-icons-png-favpng-LZAwn-YL6-LZ89i-Z09mrp-Cm-Rdb-M-removebg.png");
}
function take_snapshot(){
    save("Nivaan.png");
}