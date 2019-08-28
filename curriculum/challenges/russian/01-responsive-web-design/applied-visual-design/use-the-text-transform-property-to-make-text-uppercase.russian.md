---
id: 587d781c367417b2b2512ac0
title: Use the text-transform Property to Make Text Uppercase
challengeType: 0
videoUrl: https://scrimba.com/c/cvVZQSP
forumTopicId: 301081
localeTitle: Используйте свойство text-transform для создания текста в верхнем регистре
---

## Description
<section id='description'>
Свойство <code>text-transform</code> в CSS используется для изменения внешнего вида текста. Это удобный способ убедиться, что текст на веб-странице отображается постоянно, без необходимости изменять текстовое содержимое фактических элементов HTML. В следующей таблице показано, как различные значения <code>text-transform</code> изменяют текст примера «Transform me». <table class="table table-striped"><thead><tr><th> Стоимость </th><th> результат </th></tr></thead><tbody><tr><td> <code>lowercase</code> </td> <td> &quot;трансформировать меня&quot; </td></tr><tr><td> <code>uppercase</code> </td> <td> &quot;TRANSFORM ME&quot; </td></tr><tr><td> <code>capitalize</code> </td> <td> «Трансформировать меня» </td></tr><tr><td> <code>initial</code> </td> <td> Использовать значение по умолчанию </td></tr><tr><td> <code>inherit</code> </td> <td> Используйте значение <code>text-transform</code> из родительского элемента </td></tr><tr><td> <code>none</code> </td> <td> <strong>По умолчанию:</strong> используйте исходный текст </td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
Преобразуйте текст <code>h4</code> в верхний регистр, используя свойство <code>text-transform</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>h4</code> text should be uppercase.
    testString: assert($('h4').css('text-transform') === 'uppercase');
  - text: The original text of the h4 should not be changed.
    testString: assert(($('h4').text() !== $('h4').text().toUpperCase()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
