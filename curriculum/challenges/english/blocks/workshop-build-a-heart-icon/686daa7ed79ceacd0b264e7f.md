---
id: 686daa7ed79ceacd0b264e7f
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

The next step is to set the `width` and `height` attributes for the `svg` element. As you are creating an icon, both values should be set small.

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
    --fcc-editable-region--
      <path
        d="M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5.32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z"
      ></path>
    </svg>
  </body>
</html>
```
