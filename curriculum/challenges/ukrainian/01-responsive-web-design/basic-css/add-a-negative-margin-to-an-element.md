---
id: bad87fee1348bd9aedf08823
title: Додайте від’ємне поле до елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpyGs3'
forumTopicId: 16166
dashedName: add-a-negative-margin-to-an-element
---

# --description--

Властивість `margin` контролює відстань між кордоном елемента (`border`) та елементами, які його оточують.

Якщо встановити `margin` на від’ємне значення, то елемент збільшиться в розмірі.

# --instructions--

Спробуйте встановити `margin` на від’ємне значення, як це зроблено для червоного блоку.

Змініть `margin` синього блоку на `-15px`, щоб він повністю заповнив горизонтальну ширину жовтого блоку, який його оточує.

# --hints--

Клас `blue-box` повинен надати елементам `margin` зі значенням `-15px`.

```js
assert($('.blue-box').css('margin-top') === '-15px');
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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
