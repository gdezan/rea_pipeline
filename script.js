const play = document.querySelector("#play-1");
const commieVideo = document.querySelector("#commie");

let isPlaying = false;

document.addEventListener("click", event => {
  commieVideo.play();
})