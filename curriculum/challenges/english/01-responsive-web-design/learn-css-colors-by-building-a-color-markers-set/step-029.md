---
id: 617bb77353188166af43f3ac
title: Step 29
challengeType: 0
dashedName: step-29
---

# --description--

To create the next secondary color, cyan, update the `rgb` function in the `two` CSS rule to combine pure green and pure blue.

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

.one {
  background-color: rgb(255, 255, 0);
}

--fcc-editable-region--
.two {
  background-color: rgb(0, 255, 0);
}
--fcc-editable-region--

.three {
  background-color: rgb(0, 0, 255);
}

```
