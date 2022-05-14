nose_x =  0;
nose_y =  0;

function preload() {
    ClownNose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
        
        nose_x = result[0].pose.nose.x -10;
        nose_y = result[0].pose.nose.y +6;
    }
}

function draw() {
    image(video, 0 , 0, 300, 300);
    image(ClownNose, nose_x, nose_y, 30, 30);
}

function snapshot() {
    save('my_filter.png');
}