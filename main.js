Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quqlity:90

});


camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bRq3MA0HS/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        document.getElementById("result_hand_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if(results[0].label == "Like")
        {
            document.getElementById("update_gestures").innerHTML = "&#128077;";
        }
        if(results[0].label == "Dislike")
        {
            document.getElementById("update_gestures").innerHTML = "&#128078;";
        }
        if(results[0].label == "Clapping")
        {
            document.getElementById("update_gestures").innerHTML = "&#128079;";
        }
        if(results[0].label == "Amazing")
        {
            document.getElementById("update_gestures").innerHTML = "&#128076;";
        }
        if(results[0].label == "Hand Shake")
        {
            document.getElementById("update_gestures").innerHTML = "&#129309;";
        }
        if(results[1].label == "Like")
        {
            document.getElementById("update_gestures2").innerHTML = "&#128077;";
        }
        if(results[1].label == "Dislike")
        {
            document.getElementById("update_gestures2").innerHTML = "&#128078;";
        }
        if(results[1].label == "Clapping")
        {
            document.getElementById("update_gestures2").innerHTML = "&#128079;";
        }
        if(results[1].label == "Amazing")
        {
            document.getElementById("update_gestures2").innerHTML = "&#128076;";
        }
        if(results[1].label == "Hand Shake")
        {
            document.getElementById("update_gestures2").innerHTML = "&#129309;";
        }
    }
}

