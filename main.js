Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    
    Webcam.attach("#camera");
    
    function take_snapshot()
    {
        Webcam.snap(function(datauri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+datauri+'"/>';
        });
    
    }
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/L7vyU0N9R/model.json", modelLoaded);
    
    function modelLoaded()
    {
        console.log("Model Loaded")
    }
   
    function check()
    {
        img=document.getElementById("captured_image");
        classifier.classify(img, gotResult);
    }
    function gotResult(error,results)
    {
    if(error)
    {
    console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        prediction_1=results[0].label;
        if (results[0].label=="Victory"){
    document.getElementById("update_gesture").innerHTML="&#9996;";
        }
    
        if (results[0].label=="Thumbs Up"){
    document.getElementById("update_gesture").innerHTML="&#128077;";
        }
        if (results[0].label=="Amazing"){
            document.getElementById("update_gesture").innerHTML="&#128076;";
                }
    }
}