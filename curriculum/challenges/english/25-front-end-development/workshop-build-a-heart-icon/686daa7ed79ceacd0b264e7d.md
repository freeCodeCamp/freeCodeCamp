---
id: 686daa7ed79ceacd0b264e7d
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

The next step is to set the `width` and `height` attributes for the `svg` element. As we creating an icon, both values should be set small.

Set both values to `24`.

# --hints--

Your `svg` element should have a `width` attribute of `24`.

```js
const svg = document.querySelector('svg');
assert.strictEqual(svg.getAttribute('width'), '24');
```

Your `svg` element should have a `height` attribute of `24`.

```js
const svg = document.querySelector('svg');
assert.strictEqual(svg.getAttribute('height'), '24');
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
    <svg>
      
    </svg>
    --fcc-editable-region--
  </body>
</html>
```
