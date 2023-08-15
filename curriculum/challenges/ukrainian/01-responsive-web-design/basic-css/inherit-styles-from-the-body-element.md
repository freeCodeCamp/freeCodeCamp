---
id: bad87fee1348bd9aedf08746
title: Успадкування стилів від елемента body
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Тепер ми довели, що кожна HTML сторінка має елемент `body` і що він також може бути `body` оформлений за допомогою CSS.

Пам'ятайте, що ви можете оформляти елемент `body` як і будь-який інший елемент HTML і всі наступні елементи успадкують стилі `body`.

# --instructions--

Спершу створіть елемент `h1` з текстом `Hello World`

Тепер, давайте задамо всім елементам на сторінці колір `green`, додавши `color: green;` до об'яви стилю елемента `body`.

Нарешті, задайте елементу `body` шрифт `monospace`, додавши `font-family: monospace;` до об'яви стилю елемента `body`.

# --hints--

Ви повинні створити елемент `h1`.

```js
assert($('h1').length > 0);
```

Елемент `h1` повинен мати текст `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Елемент `h1` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Елемент `body` повинен мати властивість `color` зі значенням `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Елемент `body` повинен мати властивість `font-family` зі значенням `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Елемент `h1` повинен успадкувати шрифт `monospace` від елемента `body`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Елемент `h1` повинен успадкувати колір `green` від елементу `body`.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```
