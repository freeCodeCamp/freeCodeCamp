---
id: 6140d0069049f5139d78da40
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

Give the `.line` selector a `transform-origin` property of `0% 0%`.

TODO: This is new concept? Explain better?

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

--fcc-editable-region--
.line {
  background-color: black;
  width: 50%;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
}
--fcc-editable-region--
```
