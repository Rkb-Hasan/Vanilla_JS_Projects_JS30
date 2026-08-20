# 🎨 Fun with HTML5 Canvas

A vanilla JS project from **JavaScript30** — a freeform drawing app built entirely on the Canvas API, with color-shifting, dynamic line width, and mouse tracking.

## What it does

Draw on the canvas by moving your mouse while clicking. The stroke color cycles through the hue spectrum and the line width pulses in and out as you draw.

## Focus

- **Canvas API** — getting a 2D drawing context and issuing draw commands
- **Mouse Events** — `mousedown`, `mousemove`, `mouseup`, `mouseout` to track drawing state
- **HSL Color Manipulation** — cycling hue values for a rainbow effect
- **State Tracking** — storing last mouse position to draw continuous lines

## How it works

1. Grab the canvas element and its 2D context.
2. Set canvas dimensions to match the window.
3. Track a `isDrawing` flag, toggled on `mousedown`/`mouseup`.
4. On `mousemove`, draw a line from the last recorded position to the current one.
5. Increment a `hue` value on each stroke and apply it via `hsl()` for the color-cycling effect.
6. Oscillate line width up and down within a range, flipping direction at the limits.

## Tech

- HTML5 Canvas
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser and start drawing.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
