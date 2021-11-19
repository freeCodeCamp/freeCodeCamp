---
id: 6196ce0415498d2463989e84
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

To give the effect of a mountain range, add another mountain, by creating a new `div` immediately after `.left-mountain`, and give the new `div` the `class` of `back-mountain`.

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
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>CSS Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

--fcc-editable-region--
  <body>
    <div class="left-mountain"></div>

    <div class="penguin"></div>
    <div class="ground"></div>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  overflow: clip;
}

.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);
  z-index: 2;
  margin-top: 100px;
}

.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
}

.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  margin-top: -58px;
}
```
