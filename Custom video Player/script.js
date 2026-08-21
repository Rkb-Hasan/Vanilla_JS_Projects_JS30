// grab all the elems
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress__filled");
const toggleButton = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skips = document.querySelectorAll("[data-skip]");

// toggle video play onClick
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// update icon
function updatePlaybuttonIcon() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggleButton.innerText = icon;
}

// triggerskip
function triggerSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener("click", togglePlay);
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("pause", updatePlaybuttonIcon);
video.addEventListener("play", updatePlaybuttonIcon);

// skip buttons events
skips.forEach((skip) => skip.addEventListener("click", triggerSkip));
console.dir(video);
