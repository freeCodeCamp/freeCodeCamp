---
id: 6140df547f09402144e40b92
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

Give the `.wheel` selector an `animation-name` property set to `wheel` and an `animation-duration` property set to `10s`.

TODO: More explain

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
--fcc-editable-region--
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  height: 500px;
  width: 500px;
}
--fcc-editable-region--

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
.cabin:nth-of-type(2) {
  right: 17%;
  top: 93.5%;
}
.cabin:nth-of-type(3) {
  right: 67%;
  top: 93.5%;
}
.cabin:nth-of-type(4) {
  left: -8.5%;
  top: 50%;
}
.cabin:nth-of-type(5) {
  left: 17%;
  top: 7%;
}
.cabin:nth-of-type(6) {
  right: 17%;
  top: 7%;
}

@keyframes wheel {
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
}
```
