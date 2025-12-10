---
id: 686daa7ed79ceacd0b264e7f
title: Step 2
challengeType: 0
dashedName: step-2
demoType: onLoad
---

# --description--

Now that you have the `svg` container, nest a `path` element inside it. The `path` will define the shape of the heart icon. (We'll add the shape details next.)

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
    <svg>
      
    </svg>
    --fcc-editable-region--
  </body>
</html>
```
