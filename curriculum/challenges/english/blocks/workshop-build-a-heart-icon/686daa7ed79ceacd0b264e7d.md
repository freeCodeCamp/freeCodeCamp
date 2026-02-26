---
id: 686daa7ed79ceacd0b264e7d
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

You should nest one `path` element inside your `svg` element to give the image shape.

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
    <svg>
    --fcc-editable-region--
      
    --fcc-editable-region--
    </svg>
  </body>
</html>
```
