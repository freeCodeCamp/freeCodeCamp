---
id: bad87fee1248bd9aedf08824
title: Додайте різні поля до кожної сторони елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

Іноді елемент потрібно встановити так, щоб значення `margin` були різними для кожної сторони.

CSS дозволяє контролювати `margin` усіх чотирьох сторін за допомогою властивостей `margin-top`, `margin-right`, `margin-bottom` та `margin-left`.

# --instructions--

Надайте синьому блоку `margin` зі значенням `40px` зверху та зліва, й `20px` знизу та справа.

# --hints--

Клас `blue-box` повинен надати елементам `margin` зі значенням `40px` зверху.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Клас `blue-box` повинен надати елементам `margin` зі значенням `20px` справа.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Клас `blue-box` повинен надати елементам `margin` зі значенням `20px` знизу.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Клас `blue-box` повинен надати елементам `margin` зі значенням `40px` зліва.

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
