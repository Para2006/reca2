function startClassifier() 
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MQ7U_Abf3/model.json' , modelReady  );
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error , results){
    console.log('gotResult');
}