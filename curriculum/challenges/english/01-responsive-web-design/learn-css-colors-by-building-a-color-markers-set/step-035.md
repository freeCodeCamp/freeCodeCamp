---
id: 618a00ed1ca871a2b3aca0cb
title: Step 35
challengeType: 0
dashedName: step-35
---

# --description--

Now that you've gone through all the primary, secondary, and tertiary colors on a color wheel, it'll be easier to understand other color theory concepts and how they impact design.

First, in `one`, `two`, and `three`, adjust the values in the `rgb` function so that the `background-color` of each element is set to pure black.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Color Markers</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

--fcc-editable-region--
.one {
  background-color: rgb(128, 255, 0);
}

.two {
  background-color: rgb(0, 128, 255);
}

.three {
  background-color: rgb(255, 0, 128);
}
--fcc-editable-region--

```
