---
id: 60a3e3396c7b40068ad69986
title: Part 29
challengeType: 0
dashedName: part-29
---

# --description--

Create a new `div` with a `class` value of `three` right under the `.two` element.

# --hints--

Your existing `.one` and `.two` elements should not be changed.

```js

```

Your new `div` should come after your `.two` element.

```js

```

Your new `div` element should have a `class` with the value `three`.

```js

```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  overflow: hidden;
}

.frame {
  border: 50px solid black;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
}

.one {
  width: 425px;
  height: 150px;
  background-color: #efb762;
  margin: 20px auto 20px;
}

.two {
  width: 475px;
  height: 200px;
  background-color: #8f0401;
  margin: auto;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
    <link href="./css/style10.css" rel="stylesheet">
  </head>
  <body>
    <div class="frame">
      <div class="canvas">
        <div class="one"></div>
        <div class="two"></div>
--fcc-editable-region--

--fcc-editable-region--
      </div>
    </div>
  </body>
</html>
```
