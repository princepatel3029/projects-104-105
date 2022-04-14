Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png', 
    png_quality: 90
    });
Webcam.attach('#camera');
camera = document.getElementById("camera");



function take_snap_shot() {
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="you" src = "' + data_uri + '">';
     

    })
}
console.log('ml5version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function modelLoaded() {
    console.log('modle loaded');
}
function check() {
    img = document.getElementById('you');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);

    }
    else {
        console.log(results);
        document.getElementById("resultobjectname").innerHTML = results[0].label;
        document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}