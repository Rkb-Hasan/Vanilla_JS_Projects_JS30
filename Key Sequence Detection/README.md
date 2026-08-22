# Key Sequence Detection

A vanilla JS project from **JavaScript30** — detects a secret key sequence typed anywhere on the page and triggers an easter egg animation when matched.

## What it does

Type the correct sequence of keys (like the classic Konami code) anywhere on the page, and a hidden animation (e.g. a spinning/cornify effect) fires.

## Focus

- **Event Listeners** — capturing `keyup` events on the window
- **Array Manipulation** — tracking pressed keys and comparing against a target sequence
- **splice()** — trimming the tracked keys array to only keep the most recent presses
- **join() & comparison** — converting arrays to strings to check for a match

## How it works

1. Keep an array (`pressed`) to store keys as they're typed.
2. On every `keyup`, push `event.key` into the `pressed` array.
3. Use `splice()` to keep the array trimmed to the same length as the secret code, dropping older keys off the front.
4. Join both the `pressed` array and the secret code array into strings and compare them.
5. If they match, trigger the animation/easter egg.

## Tech

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and type the secret sequence.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
