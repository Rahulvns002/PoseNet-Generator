let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;

function setup()
{
    createCanvas(600,800);
    capture=createCapture(VIDEO)
    capture.hide();
    posenet=ml5.poseNet(capture,modeLoaded);
    posenet.on('pose',receivedPoses);
    //actor_img=loadImage('joh_preview_rev_1.png',)
   
}
function receivedPoses(poses)
{
    console.log(poses);
    if(poses.length > 0)
    {
        singlePose = poses[0].pose;
       skeleton=poses[0].skeleton;
        
    }
    console.log(noseX + "  " + noseY);
      
}

function modeLoaded()
{
    console.log("Model has loaded");
}
function draw()
{

    image(capture,0,0);
    fill(255,0,0);
    if(singlePose)
    {
   for(let i=0;i<singlePose.keypoints.length;i++)
   {
    ellipse(singlePose.keypoints[i].position.x,singlePose.keypoints[i].position.y,20);
   }
   strokeWeight(5);
   stroke(255,255,255);
   for(let j=0;j<skeleton.length;j++)
   {
    line(skeleton[j][0].position.x,skeleton[j][0].position.y,
        skeleton[j][1].position.x,skeleton[j][1].position.y);
   }
   //image(actor_img,singlePose.nose.x-45,singlePose.nose.y-60,100,100);
}
}