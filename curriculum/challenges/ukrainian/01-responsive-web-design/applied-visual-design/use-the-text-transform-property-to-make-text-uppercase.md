---
id: 587d781c367417b2b2512ac0
title: Використання властивості text-transform, щоб перевести текст у верхній регістр
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

Властивість CSS `text-transform` використовується для того щоб змінити вигляду тексту. Це зручний спосіб переконатися, що текст на веб-сторнці виникає послідовно та не змушує змінювати зміст тексту самих елементів HTML.

Наступна таблиця показує, як різні значення `text-transform` змінюють приклад тексту "Зміни мене".

<table class='table table-striped'><thead><tr><th>Значення</th><th>Результат</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"зміни мене"</td></tr><tr><td><code>uppercase</code></td><td>"ЗМІНИ МЕНЕ"</td></tr><tr><td><code>capitalize</code></td><td>"Зміни мене"</td></tr><tr><td><code>initial</code></td><td>Використовувати значення за замовчуванням</td></tr><tr><td><code>inherit</code></td><td>Використовуйте значення <code>text-transform</code> з батьківського елемента</td></tr><tr><td><code>none</code></td><td><strong>За замовчуванням:</strong> Використовуйте вихідний текст</td></tr></tbody></table>

# --instructions--

Змініть текст тегу `h4` в верхній регістр за допомогою властивості `text-transform`.

# --hints--

Властивість тексту `h4` повинна мати значення `uppercase`.

```js
assert($('h4').css('text-transform') === 'uppercase');
```

Оригінальний текст h4 не можна змінювати.

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
<div class="fullCard" id="thumbnail">
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
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
<div class="fullCard" id="thumbnail">
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
