---
id: 587d78a6367417b2b2512adc
title: Використання властивості CSS transform skewY для оновлення елементу разом з віссю Y
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Зважаючи на те, що функція `skewX()` переносить вибраний елемент вздовж вісі Х на заданий градус, не дивно, що властивість `skewY()` переносить елемент вздовж вісі Y (по вертикалі).

# --instructions--

Перемістіть елемент з ідентифікатором `top` на -10 градуси по вісі Y, використовуючи властивість `transform`.

# --hints--

Елемент з ідентифікатором `top` повинен переміститись на -10 градуси по вісі Y.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
