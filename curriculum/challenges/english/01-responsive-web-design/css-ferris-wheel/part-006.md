---
id: 6140cfc08ca9c5128c3e6478
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

Set the `.line` selector's `position` property to `absolute`, the `left` property to `50%`, and the `top` property to `50%`.

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
}
--fcc-editable-region--
```
