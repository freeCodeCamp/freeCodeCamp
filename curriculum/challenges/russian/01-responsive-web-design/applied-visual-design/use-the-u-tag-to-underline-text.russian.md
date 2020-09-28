---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: https://scrimba.com/c/cN6aQCL
forumTopicId: 301082
localeTitle: Используйте тег u для подчеркивания текста
---

## Description
<section id='description'>
Чтобы подчеркнуть текст, вы можете использовать тег <code>u</code> . Это часто используется для обозначения важности раздела текста или чего-то, что нужно запомнить. С тегом <code>u</code> браузер применяет CSS <code>text-decoration: underline;</code> к элементу.
</section>

## Instructions
<section id='instructions'>
Оберните тег <code>u</code> только вокруг текста «Ph.D. students». <strong>Заметка</strong> <br> Старайтесь избегать использования тега <code>u</code>, так как его можно спутать с ссылкой. Якорные теги также по умолчанию имеют подчеркнутое форматирование.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>u</code> tag to the markup.
    testString: assert($('u').length === 1);
  - text: The <code>u</code> tag should wrap around the text "Ph.D. students".
    testString: assert($('u').text() === 'Ph.D. students');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
