---
id: 587d781a367417b2b2512ab7
title: Use the strong Tag to Make Text Bold
challengeType: 0
videoUrl: ''
localeTitle: 'Используйте сильный тег, чтобы сделать текст полужирным'
---

## Description
<section id="description"> Чтобы сделать текст полужирным, вы можете использовать <code>strong</code> тег. Это часто используется, чтобы привлечь внимание к тексту и символизировать, что это важно. С <code>strong</code> тегом браузер применяет CSS <code>font-weight: bold;</code> к элементу. </section>

## Instructions
<section id="instructions"> Оберните <code>strong</code> бирку вокруг «Стэнфордского университета» внутри тега <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен добавить один <code>strong</code> тег к разметке.
    testString: 'assert($("strong").length == 1, "Your code should add one <code>strong</code> tag to the markup.");'
  - text: <code>strong</code> тег должен находиться внутри тега <code>p</code> .
    testString: 'assert($("p").children("strong").length == 1, "The <code>strong</code> tag should be inside the <code>p</code> tag.");'
  - text: <code>strong</code> бирка должна охватывать слова «Стэнфордский университет».
    testString: 'assert($("strong").text().match(/^Stanford University$/gi), "The <code>strong</code> tag should wrap around the words "Stanford University".");'

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
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

```js
// solution required
```
</section>
