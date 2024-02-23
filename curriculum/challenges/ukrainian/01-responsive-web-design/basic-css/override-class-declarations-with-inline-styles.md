---
id: bad87fee1348bd9aedf06756
title: Заміна об'яв класів за допомогою вбудованих стилів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

Отож, ми довели, що об'яви id заміняють об'яви класів, незалежно від того, де вони об'явлені у вашому елементі CSS `style`.

Є й інші способи замінити CSS. Пригадуєте вбудовані стилі?

# --instructions--

Скористайтеся вбудованим стилем, щоб спробувати зробити елемент `h1` білим. Пам'ятайте, що вбудовані стилі виглядають отак:

```html
<h1 style="color: green;">
```

Залишіть класи `blue-text` та `pink-text` на елементі `h1`.

# --hints--

Елемент `h1` повинен мати клас `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Елемент `h1` повинен мати клас `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Елемент `h1` повинен мати id `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Елемент `h1` повинен мати вбудований стиль.

```js
assert(document.querySelector('h1[style]'));
```

Елемент `h1` повинен бути білим.

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
