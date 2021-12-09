---
id: 587d78ae367417b2b2512afc
title: Використовуйте flex-grow властивість для розширення об'єктів
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

Протилежною до властивості `flex-shrink` є `flex-grow` властивість. Згадайте, що `flex-shrink` контролює розмір об'єктів, коли контейнер стискується. Властивість `flex-grow` контролює розмір об'єктів, коли контейнер вихідних елементів збільшується.

Наприклад, якщо один об'єкт матиме значення `flex-grow` від `1`, а інший матиме значення `flex-grow` від `3`, то одне зі значень від `3` стиснеться втричі більше ніж інше.

# --instructions--

Додайте CSS властивість `flex-grow` до обох `#box-1` та `#box-2`. Надайте для `#box-1` значення `1`, і для `#box-2` значення `2`.

# --hints--

Елемент `#box-1` повинен мати властивість `flex-grow` налаштованою до значення `1`.

```js
assert($('#box-1').css('flex-grow') == '1');
```

Елемент `#box-2` повинен мати властивість `flex-grow` налаштованою до значення `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
