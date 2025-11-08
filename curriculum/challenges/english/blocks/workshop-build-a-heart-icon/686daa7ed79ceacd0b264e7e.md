---
id: 686daa7ed79ceacd0b264e7e
title: Step 3
challengeType: 0
dashedName: step-3
---



# --description--

Set the `viewBox` attribute to `0 0 24 24`. The `viewBox` defines the position and dimension of the SVG viewport.

**Example:**
```html
<svg viewBox="0 0 24 24">
</svg>

# --hints--

You should have a `viewBox` attribute.

```js
const svg = document.querySelector('svg');
const viewBox = svg.getAttribute('viewBox');
assert.exists(viewBox);
```

You should set the `viewBox` x position to 0.

```js
const svg = document.querySelector('svg');
const viewBox = svg.getAttribute('viewBox');
const x = viewBox?.trim().split(' ')[0];
assert.strictEqual(x, '0');
```

You should set the `viewBox` y position to 0.

```js
const svg = document.querySelector('svg');
const viewBox = svg.getAttribute('viewBox');
const y = viewBox?.trim().split(' ')[1];
assert.strictEqual(y, '0');
```

You should set the `viewBox` width to 24.

```js
const svg = document.querySelector('svg');
const viewBox = svg.getAttribute('viewBox');
const width = viewBox?.trim().split(' ')[2];
assert.strictEqual(width, '24');
```

You should set the `viewBox` height to 24.

```js
const svg = document.querySelector('svg');
const viewBox = svg.getAttribute('viewBox');
const height = viewBox?.trim().split(' ')[3];
assert.strictEqual(height, '24');
```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Heart Icon</title>
  </head>
  <body>
    --fcc-editable-region--
    <svg width="24" height="24">
    </svg>
    --fcc-editable-region--
  </body>
</html>
```
