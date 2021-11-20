---
id: 619699c10a0f6e11591d73c4
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Use the `margin` property to horizontally center the `.penguin` element, and set the `margin-top` to `75px`.

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

  <body>
    <div class="penguin"></div>
    <div class="ground"></div>
  </body>
</html>
```

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  overflow: clip;
}

--fcc-editable-region--
.penguin {
  width: 300px;
  height: 300px;

}
--fcc-editable-region--

.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
}
```
