
status1 = "";
objects= "";

function preload() {
    
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Baby Not Found";
    video= createCapture(VIDEO);
    video.hide();
    video.size(640,420);
     
}

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 640, 420);
    if (status1 != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Baby Found";
            fill("#ff0000");
            text(objects[i].label, objects[i].x - 15, objects[i].y - 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }

}