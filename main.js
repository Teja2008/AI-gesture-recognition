nosex=0;
nosey=0;
difference=0;
rightWrist=0
leftWrist=0



function setup(){
    video= createCapture(VIDEO);
video.size(550,500)
video.position(300,200)
canvas= createCanvas(550,500)
canvas.position(1000,200)
poseNet= ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses )
}
function draw(){
background('#07f0dc')
fill('#ffffff')
stroke('#0008ff')
square(nosex,nosey,difference)
document.getElementById("size").innerHTML= "width & height of a square" +difference + "px"
}
function modelLoaded(){
    console.log('poseNet is initialised')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosex=results[0].pose.nose.y
        console.log("nosex="+ nosex + "nosey" + nosey) 
        leftWristx= results[0].pose.leftWrist.x
        rightWristx= results[0].pose.rightWrist.x
        console.log("leftWristx=" + leftWristx + "rightWristx"+ rightWristx)
        difference= floor(leftWristx-rightWristx)
    }
}