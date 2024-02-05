const playPauseBtn = document.getElementById('play-pause');
const playPauseIcon = document.getElementById('pause');
const audio = document.getElementById("audio");
const durationContainer = document.getElementById('duration');
const currentDurationContainer = document.getElementById('now-duration');
const progressBar = document.getElementById('line');

function showDurationInUI(audio) {
    let duration = audio.duration;
    durationContainer.innerHTML = convertToMinutes(duration);
    progressBar.max = duration;
}

audio.onloadedmetadata = ()=>{
    showDurationInUI(audio);
    showCurrentDurationInUI(audio);
}

function convertToMinutes(duration) {
    let minutes = duration / 60;
    let seconds = duration % 60;
    return `${minutes.toFixed(0)}:${seconds.toFixed(0)}`;
}

function showCurrentDurationInUI(audio) {
    let currentDuration = audio.currentTime;
    currentDurationContainer.innerHTML = convertToMinutes(currentDuration);
    progressBar.value = currentDuration;
}

audio.addEventListener("timeupdate", ()=>{
    showCurrentDurationInUI(audio);
});

playPauseBtn.addEventListener("change", playPause);

function playPause(){
    if (playPauseBtn.checked) {
        audio.play();
        playPauseIcon.src = "Icons/pause.svg";
        return;
    }
    audio.pause();
    playPauseIcon.src = "Icons/play.svg";
}