---
id: 6196adc17f77a714d51485f2
title: Step 17
challengeType: 0
dashedName: step-17
---

# --description--

Set the stack level of the mountain element such that it remains directly behind the `.ground` element.

# --hints--

You should use the `z-index` property to change the stack level.

```js
assert.notEmpty(new __helpers.CSSHelp(document).getStyle('.left-mountain')?.zIndex);
```

You should set the `z-index` property to `2`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-mountain')?.zIndex, '2');
```

You should not change the `z-index` of the `.ground` element.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.ground')?.zIndex, '3');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div class="left-mountain"></div>
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
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

--fcc-editable-region--
.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);

}
--fcc-editable-region--

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
  position: absolute;
}
```
