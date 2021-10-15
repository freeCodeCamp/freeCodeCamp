---
id: 617b8e0d93a8d10d9a90e720
title: Step 23
challengeType: 0
dashedName: step-23
---

# --description--

Notice that the `background-color` for `one` is still red. This is because you set the red value of the `rgb` function to the max of 255, or 100% red, and set both the green and blue values to 0.

Now do the same for the other colors. In the `two` CSS rule, use the `rgb` function to set the `background-color` to the max value for green. And in the `three` CSS rule, use the `rgb` function to set the `background-color` to the max value for blue.

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
  background-color: rgb(0, 0, 0);
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

--fcc-editable-region--
.two {
  background-color: green;
}

.three {
  background-color: blue;
}
--fcc-editable-region--

```
