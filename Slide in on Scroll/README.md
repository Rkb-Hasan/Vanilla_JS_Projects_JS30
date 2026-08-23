# Slide In on Scroll

A vanilla JS project from **JavaScript30** — images slide into view as you scroll down the page. Built twice, two different ways, on purpose.

## What it does

Images sit hidden off-screen until they're scrolled into the viewport, then slide in and fade to full opacity.

## Focus

- **Scroll Events** — detecting when an element enters the viewport
- **Debouncing** — throttling expensive calculations on a high-frequency event
- **IntersectionObserver API** — a modern, performant alternative to manual scroll tracking
- **DOM Manipulation** — toggling classes to trigger CSS transitions

## v1 — Wes Bos's approach (`index.html`)

Followed the original method: listen on `window.scroll`, debounce it so the handler doesn't fire on every pixel, then manually calculate each image's position relative to the viewport to decide if it's been scrolled past or is currently visible — toggling `.active` accordingly.

## v2 — IntersectionObserver approach (`index2.html`)

After learning the **IntersectionObserver API**, rebuilt the same effect with far less code and no manual math:

```js
const sliderimages = document.querySelectorAll(".slide-in");
const options = { threshold: 0.4 };

function checkSlide(entries) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });
}

const observer = new IntersectionObserver(checkSlide, options);
sliderimages.forEach((sliderImage) => observer.observe(sliderImage));
```

No scroll listener, no debouncing, no manual position math — the browser handles visibility detection natively and only fires when it actually changes.

## Why v2 is better

- **Background checks** — the browser handles intersection checks itself; it doesn't slow down the main thread.
- **No scroll events** — no heavy `scroll` or `resize` listeners running thousands of expensive calculations.
- **Asynchronous** — runs off the main thread so the page stays smooth and fast.
- **Custom triggers** — set exact [customizable thresholds](https://web.dev/articles/intersectionobserver-v2) or margins to fire code before an element even appears on screen.
- **No extra libraries** — built right into modern JavaScript.

## Tech

- HTML
- CSS
- Vanilla JavaScript
- IntersectionObserver API

## Run it

Open `index.html` for the scroll+debounce version, or `index2.html` for the IntersectionObserver version.

## Source

Part of [JavaScript30](https://javascript30.com) by Wes Bos.
