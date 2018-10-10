---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
challengeType: 0
videoUrl: ''
localeTitle: Используйте тег s для текста зачеркивания
---

## Description
<section id="description"> Чтобы зачеркнуть текст, когда горизонтальная линия пересекает символы, вы можете использовать тег <code>s</code> . Он показывает, что часть текста больше не действительна. С помощью тега <code>s</code> браузер применяет CSS <code>text-decoration: line-through;</code> к элементу. </section>

## Instructions
<section id="instructions"> Оберните тег <code>s</code> вокруг «Google» внутри тега <code>h4</code> а затем добавьте слово «Алфавит» рядом с ним, в котором не должно быть форматирования зачеркивания. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен добавить к метке один тег <code>s</code> .
    testString: 'assert($("s").length == 1, "Your code should add one <code>s</code> tag to the markup.");'
  - text: Тег <code>s</code> должен обтекать текст Google в теге <code>h4</code> . Он не должен содержать слово «Алфавит».
    testString: 'assert($("s").text().match(/Google/gi) && !$("s").text().match(/Alphabet/gi), "A <code>s</code> tag should wrap around the Google text in the <code>h4</code> tag. It should not contain the word Alphabet.");'
  - text: 'Включите слово «Алфавит» в тег <code>h4</code> , без форматирования зачеркиванием.'
    testString: 'assert($("h4").html().match(/Alphabet/gi), "Include the word Alphabet in the <code>h4</code> tag, without strikethrough formatting.");'

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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
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
