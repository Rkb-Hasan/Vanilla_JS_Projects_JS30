# 🎬 Custom Video Player

A vanilla JS project from **JavaScript30** — a fully custom video player UI built on the native HTML5 video API, no default browser controls.

## What it does

Play/pause with a click, scrub through the video by clicking or dragging the progress bar, adjust playback rate & volume by slider, adjust playback speed with the skip buttons.

## Focus

- **HTML5 Video API** — controlling playback via `play()`, `pause()`, `currentTime`, and `playbackRate`
- **DOM Manipulation** — building custom controls to replace native ones
- **Event Listeners** — click, `mousedown`/`mousemove`/`mouseup` for scrubbing, and `timeupdate` for progress
- **Custom Feature — Toggle Fullscreen**: added a fullscreen button using the Fullscreen API (`requestFullscreen()` / `exitFullscreen()`), toggling based on `document.fullscreenElement` to detect current state

## How it works

1. Hide native video controls and build a custom control bar (play/pause, skip buttons, progress bar).
2. Toggle play/pause on click, updating the button icon based on video state.
3. Use the video's `timeupdate` event to update the progress bar width in sync with playback.
4. Allow scrubbing by calculating click/drag position on the progress bar and setting `video.currentTime` accordingly.
5. **Fullscreen toggle**: on button click, check `document.fullscreenElement` — if not in fullscreen, call `videoContainer.requestFullscreen()`; if already in fullscreen, call `document.exitFullscreen()`.

## Tech

- HTML5 Video & Fullscreen APIs
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and use the custom controls — try the fullscreen button too.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos, extended with a custom fullscreen toggle feature.
