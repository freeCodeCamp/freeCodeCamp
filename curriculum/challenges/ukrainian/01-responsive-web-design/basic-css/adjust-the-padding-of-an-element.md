---
id: bad88fee1348bd9aedf08825
title: Налаштування внутрішнього відступу елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

Тепер давайте ненадовго відкладемо Cat Photo App і дізнаємося більше про стилізацію HTML.

Ви вже, напевно, помітили, що всі елементи HTML — це, в основному, маленькі прямокутники.

Є три важливі властивості, що керують простором навколо кожного елемента HTML: `padding`, `border`, і `margin`.

`padding` елемента керує простором між вмістом елемента і його `border`.

Тут ми бачимо, що синій та червоний прямокутники вкладені в жовтий прямокутник. Зверніть увагу, що червоний прямокутник має більший `padding`, ніж у синього.

Коли ви збільшуєте `padding` синього прямокутника, це збільшує відстань (`padding`) між текстом та рамкою довкола нього.

# --instructions--

Змініть `padding` синього прямокутника так, щоб він співпадав з відступом у червоному прямокутнику.

# --hints--

Клас `blue-box` повинен задати елементам `padding` товщиною `20px`.

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
