---
id: 587d781a367417b2b2512ab8
title: Використання тегу u для підкреслення тексту
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
dashedName: use-the-u-tag-to-underline-text
---

# --description--

Щоб підкреслити текст, ви можете скористатися тегом `u`. Це часто використовується, щоб виділити важливу частину тексту або те, що необхідно запам'ятати. З тегом `u` браузер використовує до елементу CSS властивість `text-decoration: underline;`.

# --instructions--

Тег `u` має містити лише текст `Ph.D. students`.

**Примітка:**Намагайтеся уникнути використання тегу `u` для тексту, схожого на посилання. Якірні теги також мають формат підкреслення за замовчуванням.

# --hints--

Ваш код має додати тег `u` у текст розмітки.

```js
assert($('u').length === 1);
```

Тег `u` має містити лише текст `Ph.D. students`.

```js
assert($('u').text() === 'Ph.D. students');
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
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
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
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
