---
id: 6140d263016325162fd076fe
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

Create a `.cabin` selector. Set the `background-color` to `red`, the `width` to `80px`, and the `height` to `100px`.

# --hints--

You should have a `.cabin` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('.cabin'));
```

Your `.cabin` selector should have a `background-color` property set to `red`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.cabin')?.backgroundColor === 'red');
```

Your `.cabin` selector should have a `width` property set to `80px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.cabin')?.width === '80px');
```

Your `.cabin` selector should have a `height` property set to `100px`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.cabin')?.height === '100px');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title> Learn CSS Animations by Building a Ferris Wheel</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div class="wheel">
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
    </div>
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

--fcc-editable-region--

--fcc-editable-region--
```
