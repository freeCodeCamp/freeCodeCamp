---
id: bad87fee1348bd9aedf08824
title: Додайте різні відступи до кожної сторони елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

Іноді елемент потрібно встановити так, щоб значення `padding` були різними для кожної сторони.

CSS дозволяє контролювати `padding` усіх чотирьох сторін за допомогою властивостей `padding-top`, `padding-right`, `padding-bottom` та `padding-left`.

# --instructions--

Надайте синьому блоку `padding` зі значенням `40px` зверху та зліва, й `20px` знизу та справа.

# --hints--

Клас `blue-box` повинен надати елементам `padding` зі значенням `40px` зверху.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `20px` справа.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `20px` знизу.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Клас `blue-box` повинен надати елементам `padding` зі значенням `40px` зліва.

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
