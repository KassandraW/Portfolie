const video = document.querySelector("#video_file");

const startBtn = document.querySelector("#start");

const stopBtn = document.querySelector("#stop");

const volSlider = document.querySelector("#volControl");

stopBtn.addEventListener("click", stopVideo)

startBtn.addEventListener("click",playVideo)

volSlider.addEventListener("change",changeVolume)

function playVideo(){
    if (video.paused === true){
        video.play();
        startBtn.style.backgroundImage ="url(../billeder/stop.png)";
    } else {
        video.pause();
        startBtn.style.backgroundImage="url(../billeder/start.png)";
    }
}

function stopVideo(){
    video.pause();
    video.currentTime=0;
}

function changeVolume(){
    let newVolume = volSlider.value/100;

    video.volume = newVolume;
}
