---
id: 587d781b367417b2b2512abb
title: Create a Horizontal Line Using the hr Element
challengeType: 0
videoUrl: ''
localeTitle: Создание горизонтальной линии с использованием элемента hr
---

## Description
<section id="description"> Вы можете использовать тег <code>hr</code> чтобы добавить горизонтальную линию по ширине содержащего ее элемента. Это можно использовать для определения изменения темы или для визуального разделения групп контента. </section>

## Instructions
<section id="instructions"> Добавьте <code>hr</code> тег под <code>h4</code> который содержит название карты. <strong>Заметка</strong> <br> В HTML <code>hr</code> является самозакрывающимся тегом и поэтому не требует отдельного закрывающего тега. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен добавить метку <code>hr</code> к разметке.
    testString: 'assert($("hr").length == 1, "Your code should add an <code>hr</code> tag to the markup.");'
  - text: Тег <code>hr</code> должен находиться между заголовком и абзацем.
    testString: 'assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi), "The <code>hr</code> tag should come between the title and the paragraph.");'

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
      <h4><s>Google</s>Alphabet</h4>

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
