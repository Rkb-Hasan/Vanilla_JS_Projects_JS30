# Drum Kit

A vanilla JS project from **JavaScript30** — press a key, hear a drum sound, watch the pad pop.

## What it does

Press any of the mapped keys (A–L) to trigger a drum sound and animate the corresponding pad on screen.

## Focus

- **Event Listeners** — capturing `keydown` events on the `window`
- **DOM Manipulation** — selecting elements with `data-key` attributes and toggling classes
- **CSS Transitions** — using `transitionend` to reset the "pressed" animation cleanly

## How it works

1. Listen for a `keydown` event on the window.
2. Use `event.key` to find the matching `audio` and `div` elements via `data-key`.
3. Play the audio and add a `.playing` class to trigger the pop animation.
4. Remove the class on `transitionend` so the animation can replay on the next press.

## Tech

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and start pressing keys.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
