# Flex Panel Gallery

A vanilla JS project from **JavaScript30** — a set of full-height panels that expand open on click, powered by Flexbox.

## What it does

Click any panel to make it expand and take up more space while the others shrink, with a smooth transition and text fade-in effect.

## Focus

- **Event Listeners** — using `click` and `transitionend` events
- **classList Toggling** — adding/removing classes to trigger CSS state changes
- **Flexbox** — using `flex-grow` to handle the expand/shrink layout
- **CSS Transitions** — staggering multiple transitions (width, font-size, opacity) for a smooth effect

## How it works

1. Select all panels and attach a `click` listener to each.
2. On click, toggle an `.open` class on the clicked panel to trigger the flex-grow expansion.
3. Toggle an `.open-active` class (often via `transitionend`) to fade in the text at the right moment in the animation sequence.
4. Flexbox handles the actual resizing of neighboring panels automatically.

## Tech

- HTML
- CSS (Flexbox)
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and click around.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
