---
id: 618a1275e873dcc803c2d1aa
title: Step 38
challengeType: 0
dashedName: step-38
---

# --description--

Next, in `one`, use the `rgb` function to set the `background-color` to black. And in `two`, use the `rgb` function to set the `background-color` to red.

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
  background-color: rgb(0, 255, 255);
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
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}
--fcc-editable-region--

.three {
  background-color: rgb(0, 0, 0);
}

```
