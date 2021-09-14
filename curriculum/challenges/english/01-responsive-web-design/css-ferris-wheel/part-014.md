---
id: 6140d4bc9db3c81c51a09ab7
title: Part 14
challengeType: 0
dashedName: part-14
---

# --description--

Continuing the pattern, select the following `.cabin` elements and apply the specific rules to them:

- The second `.cabin` should have the `right` property set to `17%` and the `top` property set to `93.5%`.
- The third `.cabin` should have the `right` property set to `67%` and the `top` property set to `93.5%`.
- The fourth `.cabin` should have the `left` property set to `-8.5%` and the `top` property set to `50%`.
- The fifth ``.cabin` should have the `left` property set to `17%` and the `top` property set to `7%`.
- The sixth `.cabin` should have the `right` property set to `17%` and the `top` property set to `7%`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title> Learn CSS Animations by Building a Ferris Wheel</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>

    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
  </body>
</html>
```

```css
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  height: 500px;
  width: 500px;
}

.line {
  background-color: black;
  width: 50%;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0% 0%;
}

.line:nth-of-type(2) {
  transform: rotate(60deg);
}
.line:nth-of-type(3) {
  transform: rotate(120deg);
}
.line:nth-of-type(4) {
  transform: rotate(180deg);
}
.line:nth-of-type(5) {
  transform: rotate(240deg);
}
.line:nth-of-type(6) {
  transform: rotate(300deg);
}

.cabin {
  background-color: red;
  width: 80px;
  height: 100px;
  position: absolute;
  border: 2px solid;
  transform-origin: 50% 0%;
}

.cabin:nth-of-type(1) {
  right: -8.5%;
  top: 50%;
}
--fcc-editable-region--

--fcc-editable-region--
```
