---
id: bad87fee1348bd9aedf08824
title: Додавання різних внутрішніх відступів до кожної сторони елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

Інколи вам потрібно буде налаштувати елемент так, щоб його внутрішні відступи `padding` були різними для кожної з його сторін.

CSS дозволяє контролювати параметри відступу `padding` для всіх чотирьох сторін елемента окремо, використовуючи властивості `padding-top`, `padding-right`, `padding-bottom`, та `padding-left`.

# --instructions--

Задайте внутрішньому відступу `padding` синього прямокутника товщину `40px` для верхньої та нижньої сторін елемента і товщину `20px` для нижньої і правої сторін.

# --hints--

Клас `blue-box` повинен задати товщину `40px` для `padding` верхньої сторони елементів.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Клас `blue-box` повинен задати товщину `20px` для `padding` правої сторони елементів.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Клас `blue-box` повинен задати товщину `20px` для `padding` нижньої сторони елементів.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Клас `blue-box` повинен задати товщину `40px` для `padding` лівої сторони елементів.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
