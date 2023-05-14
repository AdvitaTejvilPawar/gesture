prediction_1=""

Webcam.set({
    width:350,
height:300,
image_format:'png',
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">'
        }
    )
}
console.log("ml5 version" , ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gjQng9of5/model.json",modalLoaded)

function modalLoaded(){
    console.log("modalLoaded")
}
function speak(){
    var synth=window.speechSynthesis
    speak_data1="The first Prediction is " + prediction_1

    var utterthis= new SpeechSynthesisUtterance(speak_data1)
    synth.speak(utterthis)
}

function check(){
    img= document.getElementById("snap")
    classifier.classify(img, gotResults)
}
function gotResults(error,results){
    if (error) {
        console.error(error)
    } else {
        console.log(results)
    
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        prediction_1=results[0].label
        speak()
        
        if (prediction_1=="victory") {
            document.getElementById("result_emotion").innerHTML="&#9996;";
        }
        if (prediction_1=="amazing") {
            document.getElementById("result_emotion").innerHTML="&#128076;";
        }
        if (prediction_1=="best") {
            document.getElementById("result_emotion").innerHTML="&#128077;";
        }

    











    }
}

