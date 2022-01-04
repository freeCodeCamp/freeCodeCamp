---
id: bad87fee1248bd9aedf08824
title: Додати різні межі для кожної сторони елементу
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

Інколи вам потрібно буде налаштувати елемент так, щоб його зовнішні відступи `margin` були різними для кожної з його сторін.

CSS дозволяє контролювати параметри поля `margin` для всіх чотирьох сторін елемента окремо, використовуючи властивості `margin-top`, `margin-right`, `margin-bottom`, та `margin-left`.

# --instructions--

Задайте зовнішньому відступу `margin` синього прямокутника товщину `40px` для верхньої та нижньої сторін елемента і товщину `20px` для нижньої і правої сторін.

# --hints--

Клас `blue-box` повинен задати товщину `40px` для `margin` верхньої сторони елементів.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Клас `blue-box` повинен задати товщину `20px` для `margin`правої сторони елементів.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Клас `blue-box` повинен задати товщину `20px` для `margin` нижньої сторони елементів.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Клас `blue-box` повинен задати товщину `40px` для `margin` лівої сторони елементів.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
