---
id: 613e275749ebd008e74bb62e
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

A useful property of an _SVG_ (scalable vector graphics) is that is contains a `path` attribute which allows the image to be scaled without affecting the resolution of the resultant image.

Currently, the `img` is assuming it's default size, which is too large. Correctly, scale the image using it's `id` as a selector, and setting the width to `max(100px, 18vw)`, and `height` to `calc(100% - 0.3rem)`.

# --hints--

You should use the `#logo` selector to target the `img` element.

```js

```

You should give the `img` a `width` of `max(100px, 18vw)`.

```js

```

You should give the `img` a `height` of `calc(100% - 0.3rem)`.

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>freeCodeCamp: Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <img id="logo" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg">
      <h1>HTML/CSS Quiz</h1>
      <nav></nav>
    </header>
    <main></main>
  </body>
</html>

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

--fcc-editable-region--

--fcc-editable-region--

```
