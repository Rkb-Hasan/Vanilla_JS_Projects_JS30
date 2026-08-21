// grab all the elems
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progressBar = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const toggleButton = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skips = document.querySelectorAll("[data-skip]");
const screenSizer = document.querySelector(".screen__sizer");
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

// update progress
function updateProgress() {
  // returns the percentage how much has played
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateVolumeSpeed() {
  if (!isMouseDown) return;
  video[this.name] = this.value;
}

// scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}

// toggleScreenSizerIcon
function toggleScreensizerIcon() {
  const isFullScreen = document.fullscreenElement?.matches(".player");

  screenSizer.textContent = isFullScreen ? "< >" : "[ ]";
  screenSizer.title = isFullScreen ? "exit fullscreen" : "Fullscreen";
}

function toggleScreenSize() {
  if (!document.fullscreenElement) {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.webkitRequestFullscreen) {
      /* Safari */
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      /* IE11 */
      player.msRequestFullscreen();
    }
  } else {
    document.exitFullscreen();
  }
}

video.addEventListener("click", togglePlay);
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("pause", updatePlaybuttonIcon);
video.addEventListener("play", updatePlaybuttonIcon);

// skip buttons events
skips.forEach((skip) => skip.addEventListener("click", triggerSkip));
video.addEventListener("timeupdate", updateProgress);

let isMouseDown = false;

ranges.forEach((range) => {
  range.addEventListener("change", updateVolumeSpeed);
  range.addEventListener("mousemove", updateVolumeSpeed);
  range.addEventListener("mousedown", () => (isMouseDown = true));
  range.addEventListener("mouseup", () => (isMouseDown = false));
});

// scrub
let isProgressClicked = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => isProgressClicked && scrub(e));
progress.addEventListener("mousedown", () => (isProgressClicked = true));
progress.addEventListener("mouseup", () => (isProgressClicked = false));

// fullscreen
screenSizer.addEventListener("click", toggleScreenSize);
document.addEventListener("fullscreenchange", toggleScreensizerIcon);
