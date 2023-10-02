---
id: 587d781b367417b2b2512aba
title: Використання тегу s щоб закреслити текст
challengeType: 0
videoUrl: ''
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

Для закреслення тексту, що відображається як горизонтальна лінія, яка проходить крізь символи, ви можете використати тег `s`. Таким чином можна показати, що частина тексту більше недійсна. З тегом `s` браузер застосовує `text-decoration: line-through;` CSS код до елемента.

# --instructions--

Розмістіть тег `s` навколо `Google` всередині тегу `h4`, а потім додайте до нього слово `Alphabet`, яке не повинне бути закресленим.

# --hints--

Ваш код має додати тег `s` у текст розмітки.

```js
assert($('s').length == 1);
```

Тег `s` повинен бути розміщеним навколо тексту `Google` в тезі `h4`. Він не повинен містити слово `Alphabet`.

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

Ви повинні додати слово `Alphabet` в тег `h4` без викреслення.

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
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
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
