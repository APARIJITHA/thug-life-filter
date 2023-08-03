leftEyeX=0;
leftEyeY = 0;
function preload(){
    sunglass=loadImage('https://i.postimg.cc/BQBP0HpM/th-2-removebg-preview-1.png');
    
}
function setup(){
    
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is working');
}
function draw(){
   
image(video,0,0,300,300);
fill(255, 0, 0);
stroke(0,0,0);
image(sunglass,leftEyeX,leftEyeY,70,70);
}
function take_snapshot(){
save('image.png');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftEyeX=results[0].pose.leftEye.x-47;
        leftEyeY=results[0].pose.leftEye.y-30;
        console.log("leftEyex="+leftEyeX);
        console.log("leftEye y="+leftEyeY);
    }
}