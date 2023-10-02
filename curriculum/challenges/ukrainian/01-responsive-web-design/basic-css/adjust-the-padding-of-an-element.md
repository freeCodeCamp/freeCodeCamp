---
id: bad88fee1348bd9aedf08825
title: Налаштуйте відступ елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Відкладемо застосунок з фотографіями котів та детальніше дізнаємось про стилізацію HTML.

Можливо, ви помітили, що всі елементи HTML — це маленькі прямокутники.

Відстань кожного елемента HTML контролюють три важливі властивості: `padding`, `border` та `margin`.

Властивість `padding` контролює відстань між вмістом елемента та його кордоном (`border`).

Як бачимо, синій та червоний блоки розташовані в межах жовтого блоку. Зверніть увагу, що червоний блок має більше значення `padding`, ніж синій блок.

Якщо збільшити значення `padding` синього блоку, збільшиться відстань (`padding`) між текстом та кордоном навколо нього.

# --instructions--

Змініть `padding` синього блоку, щоб він співпадав з червоним блоком.

# --hints--

Клас `blue-box` повинен надати елементам `padding` зі значенням `20px`.

```js
assert($('.blue-box').css('padding-top') === '20px');
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
