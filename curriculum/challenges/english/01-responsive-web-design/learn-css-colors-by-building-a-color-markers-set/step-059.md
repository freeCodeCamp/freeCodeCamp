---
id: 61a4acbb5587197f68544d00
title: Step 59
challengeType: 0
dashedName: step-59
---

# --description--

Finally, modify the third color argument in the `linear-gradient` function, which is currently pure blue.

Update the `rgb` function so the value for red is `162`, the value of green is `27`, and the value of blue is `27`.

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
      <div class="marker red">
      </div>
      <div class="marker green">
      </div>
      <div class="marker blue">
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
.red {
  background: linear-gradient(180deg, rgb(122, 74, 14) 0%, rgb(245, 62, 113) 50%, rgb(0, 0, 255) 100%);
}
--fcc-editable-region--

.green {
  background-color: #007F00;
}

.blue {
  background-color: hsl(240, 100%, 50%);
}

```
