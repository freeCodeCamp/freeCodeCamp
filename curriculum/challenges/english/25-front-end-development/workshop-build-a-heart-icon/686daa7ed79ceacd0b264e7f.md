---
id: 686daa7ed79ceacd0b264e7f
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Before you begin coloring the image in, you should next some `path` elements inside your `svg`
element to give the image shape. This icon only needs one.

Create a `path` element.

# --hints--

You should have a `path` element nested inside of your `svg` element.

```js
const path = document.querySelector('svg path');
assert.exists(path);
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
    <svg width="24" height="24" viewBox="0 0 24 24">


    </svg>
    --fcc-editable-region--
  </body>
</html>
```
