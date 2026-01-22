---
id: 619d0503e03a790a4179d463
title: Step 53
challengeType: 0
dashedName: step-53
---

# --description--

Position the `.chin` element such that it is `25%` from the top, and `5%` from the left of its parent. Then, give the top corners a radius of `70%`, and the bottom corners a radius of `100%`.

# --hints--

You should give `.chin` a `top` property.

```js
assert.notEmpty(new __helpers.CSSHelp(document).getStyle('.chin')?.top);
```

You should give `.chin` a `top` of `--fcc-expected--`, but found `--fcc-actual--`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.top, '25%');
```

You should give `.chin` a `left` property.

```js
assert.notEmpty(new __helpers.CSSHelp(document).getStyle('.chin')?.left);
```

You should give `.chin` a `left` of `--fcc-expected--`, but found `--fcc-actual--`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.left, '5%');
```

You should give `.chin` a `border-radius` of `70% 70% 100% 100%`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.borderTopLeftRadius, '70%');
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.borderTopRightRadius, '70%');
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.borderBottomRightRadius, '100%');
assert.equal(new __helpers.CSSHelp(document).getStyle('.chin')?.borderBottomLeftRadius, '100%');
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
    <div class="back-mountain"></div>
    <div class="sun"></div>
    <div class="penguin">
      <div class="penguin-head">
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="chin"></div>
      </div>
      <div class="penguin-body"></div>
    </div>

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

.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);
  z-index: 2;
  margin-top: 100px;
}

.back-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
  position: absolute;
  z-index: 1;
  transform: rotate(45deg);
  left: 110px;
  top: 225px;
}

.sun {
  width: 200px;
  height: 200px;
  background-color: yellow;
  position: absolute;
  border-radius: 50%;
  top: -75px;
  right: -75px;
}

.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
  z-index: 4;
  position: relative;
}

.penguin * {
  position: absolute;
}

.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(
    45deg,
    gray,
    rgb(239, 240, 228)
  );
  border-radius: 70% 70% 65% 65%;
  top: 10%;
  left: 25%;
  z-index: 1;
}

.face {
  width: 60%;
  height: 70%;
  background-color: white;
  border-radius: 70% 70% 60% 60%;
  top: 15%;
}

.face.left {
  left: 5%;
}

.face.right {
  right: 5%;
}

--fcc-editable-region--
.chin {
  width: 90%;
  height: 70%;
  background-color: white;

}
--fcc-editable-region--

.penguin-body {
  width: 53%;
  height: 45%;
  background: linear-gradient(
    45deg,
    rgb(134, 133, 133) 0%,
    rgb(234, 231, 231) 25%,
    white 67%
  );
  border-radius: 80% 80% 100% 100%;
  top: 40%;
  left: 23.5%;
}

.penguin-body::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 45%;
  background-color: gray;
  top: 10%;
  left: 25%;
  border-radius: 0% 0% 100% 100%;
  opacity: 70%;
}

.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
  margin-top: -58px;
}
```
