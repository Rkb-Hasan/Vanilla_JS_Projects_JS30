# 🕐 CSS JS Clock

A vanilla JS project from **JavaScript30** — an analog clock whose hands tick in real time, styled and animated with pure CSS.

## What it does

A wall clock with hour, minute, and second hands that rotate smoothly based on the actual current time.

## Focus

- **Date Object** — pulling live hours, minutes, and seconds from `new Date()`
- **DOM Manipulation** — updating hand rotation via inline styles
- **setInterval** — re-running the update every second to keep time
- **CSS Transforms & Transitions** — rotating hands with `transform: rotate()` and easing the motion with `cubic-bezier`

## How it works

1. Run a function every second using `setInterval`.
2. Get the current seconds, minutes, and hours from `new Date()`.
3. Convert each unit into a degree value (e.g. seconds × 6° = position on the dial).
4. Apply the rotation to each hand's `transform` style.
5. Handle the "snap back" glitch when the second hand resets from 360° to 0° by briefly removing the transition.

## Tech

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and watch it tick.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
