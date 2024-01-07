---
id: 587d781a367417b2b2512ab7
title: Використання тегу strong для виділення тексту жирним шрифтом
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 301080
dashedName: use-the-strong-tag-to-make-text-bold
---

# --description--

Щоб виділити текст жирним шрифтом, ви можете використати тег `strong`. Він часто використовується для того, щоб привернути увагу до тексту та вказати на його важливість. За допомогою тегу `strong` браузер застосовує `font-weight: bold;` CSS код до елементу.

# --instructions--

Розмістіть тег `strong` навколо тексту `Stanford University` всередині тегу `p` (без крапки).

# --hints--

Ваш код має додати тег `strong` у текст розмітки.

```js
assert($('strong').length == 1);
```

Тег `source` повинен знаходитися в середині тегу `p`.

```js
assert($('p').children('strong').length == 1);
```

Тег `strong` повинен бути розміщеним навколо слів `Stanford University`.

```js
assert(
  $('strong')
    .text()
    .match(/^Stanford University\.?$/gi)
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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
