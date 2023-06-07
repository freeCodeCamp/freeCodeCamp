---
id: 61969c487ced6f12db8fef94
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

Target the `.left-mountain` element, and set its `width` and `height` to `300px`. Then, set the `background` to a linear gradient starting at `rgb(203, 241, 228)` and ending at `rgb(80, 183, 255)`.

# --hints--

You should use the `.left-mountain` selector.

```js
assert.match(code, /\.left-mountain\s*\{/);
```

You should give `.left-mountain` a `width` of `300px`. Expected `--fcc-actual--` to be `--fcc-expected--`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-mountain')?.width, '300px');
```

You should give `.left-mountain` a `height` of `300px`. Expected `--fcc-actual--` to be `--fcc-expected--`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.left-mountain')?.height, '300px');
```

You should give `.left-mountain` a `background` of `linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255))`.

```js
assert.include(['linear-gradient(rgb(203,241,228),rgb(80,183,255))', 'rgba(0,0,0,0)linear-gradient(rgb(203,241,228),rgb(80,183,255))repeatscroll0%0%'], new __helpers.CSSHelp(document).getStyle('.left-mountain')?.getPropVal('background', true));
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
