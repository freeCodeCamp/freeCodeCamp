---
id: 617bd6ec666b1da2587e4e37
title: Step 34
challengeType: 0
dashedName: step-34
---

# --description--

There are three more tertiary colors: chartreuse green (green + yellow), azure (blue + cyan), and rose (red + magenta).

To create chartreuse green, update the `rgb` function in `one` so that red is at `128`, and set green to the max value.

For azure, update the `rgb` function in `two` so that green is at `128` and blue is at the max value.

And for rose, which is sometimes called bright pink, update the `rgb` function in `three` so that green is at `128` and red is at the max value.

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
  background-color: rgb(255, 128, 0);
}

.two {
  background-color: rgb(0, 255, 128);
}

.three {
  background-color: rgb(128, 0, 255);
}
--fcc-editable-region--

```
