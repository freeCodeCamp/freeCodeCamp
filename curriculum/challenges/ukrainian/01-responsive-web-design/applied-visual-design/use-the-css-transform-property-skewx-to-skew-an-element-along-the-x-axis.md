---
id: 587d78a6367417b2b2512adb
title: Використання властивості CSS transform skewX для оновлення елементу разом з віссю X
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

`skewX()` — ще одна функція властивості `transform`, яка переносить обраний елемент по власній вісі Х (горизонтальній) на задану кількість градусів.

Даний код пересуває абзац на -32 градуси по вісі Х.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Перемістіть елемент з ідентифікатором `bottom` на 24 градуси по вісі Х, використовуючи властивість `transform`.

# --hints--

Елемент з ідентифікатором `bottom` повинен переміститись на 24 градуси по вісі Х.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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
