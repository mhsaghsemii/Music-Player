let progress = document.querySelector("#progress")
let music = document.querySelector(".music")
let playPause = document.querySelector("#playPause")


music.onloadedmetadata = function () {
    progress.max = music.duration;
    progress.value = music.currentTime;
}

function play() {
    if (playPause.classList.contains("pause-music")) {
        music.pause();
        playPause.classList.remove("pause-music");
        playPause.classList.add("play-music");
    } else {
        music.play()
        playPause.classList.add("pause-music");
        playPause.classList.remove("play-music");

    }
}

if (music.play()) {
    setInterval(() => {
        progress.value = music.currentTime;
    }, 600)
}

progress.onchange = function () {
    music.play();
    music.currentTime = progress.value;
    playPause.classList.add("pause-music");
    playPause.classList.remove("play-music");

}