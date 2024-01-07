---
id: 587d781b367417b2b2512abc
title: Налаштування властивості фонового кольору тексту
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

Замість того, щоб налаштовувати загальний фон чи колір тексту, аби передній план легко читався, ви можете додати `background-color` до елемента з текстом, який хочете підкреслити. В цьому завданні використовується код `rgba()` замість `hex` чи стандартного `rgb()`.

<blockquote>rgba означає:<br>  r = red (червоний)<br>  g = green (зелений)<br>  b = blue (синій)<br>  a = alpha/рівень непрозорості</blockquote>

Значення RGB можуть змінюватися в діапазоні від 0 до 255. Значення альфа може змінюватися від 1, коли колір повністю непрозорий або суцільний, до 0, коли колір стає повністю прозорий і виразний. `rgba()` чудово підходить в цій ситуації, оскільки дозволяє вам налаштувати непрозорість. Це значить, що вам не треба повністю загороджувати фон.

В цьому завданні вам слід використати `background-color: rgba(45, 45, 45, 0.1)`. Це створить темно-сірий колір, який буде майже прозорим через низький рівень непрозорості.

# --instructions--

Щоб текст більше виділявся, поміняйте властивість `background-color` елемента `h4` на дане значення `rgba()`.

Також видаліть в `h4` властивість `height` та додайте `padding` з 10px.

# --hints--

Ваш код повинен додати властивість `background-color` до елемента `h4` з налаштуванням `rgba(45, 45, 45, 0.1)`.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

Ваш код повинен додати властивість `padding` до елемента `h4` та налаштувати її до 10 пікселів.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

Властивість `height` елемента `h4` потрібно видалити.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
