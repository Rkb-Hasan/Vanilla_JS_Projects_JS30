# Hold Shift & Check Checkboxes

A vanilla JS project from **JavaScript30** — replicates the Gmail-style trick of shift-clicking to check a whole range of checkboxes at once.

## What it does

Click one checkbox, then hold Shift and click another — every checkbox in between gets checked automatically.

## Focus

- **Event Delegation** — attaching one listener to a parent instead of every checkbox
- **DOM Manipulation** — reading and updating checkbox state
- **Array Methods** — using indexes to find the range between two checked boxes

## How it works

1. Attach a `click` listener to all checkboxes.
2. Track the last checkbox that was clicked (without Shift).
3. On each click, check if `event.shiftKey` is true and a "last clicked" box exists.
4. If so, find both checkboxes' indexes in the list and toggle every checkbox between them to checked.
5. Update the "last clicked" reference after each click.

## Tech

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

## Run it

Just open `index.html` in your browser, click a checkbox, then shift-click another further down.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
