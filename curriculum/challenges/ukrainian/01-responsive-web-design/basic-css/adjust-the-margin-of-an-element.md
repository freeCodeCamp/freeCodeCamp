---
id: bad87fee1348bd9aedf08822
title: Налаштування зовнішнього відступу елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

Властивість елемента `margin` контролює відстань між межами елемента `border` й елементами, що його оточують.

Тут ми бачимо, що синій та червоний прямокутники вкладені у жовтий прямокутник. Зверніть увагу, що в червоного прямокутника поля `margin` більші, ніж у синього, тому він здається меншим.

Коли ви збільшуєте поле `margin` синього прямокутника, це збільшує відстань між його межею та елементами, що його оточують.

# --instructions--

Змініть `margin` синього прямокутника так, щоб він співпадав з полем червоного прямокутника.

# --hints--

Клас `blue-box` повинен задати елементам `margin` товщиною `20px`.

```js
assert($('.blue-box').css('margin-top') === '20px');
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
