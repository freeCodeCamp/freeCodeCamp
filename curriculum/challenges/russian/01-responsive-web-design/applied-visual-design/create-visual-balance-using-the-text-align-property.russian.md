---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: https://scrimba.com/c/c3b4EAp
forumTopicId: 301053
localeTitle: Создание визуального баланса Использование свойства text-align
---

## Description
<section id='description'>
Этот раздел учебной программы посвящен прикладному визуальному дизайну. Первая группа задач основывается на данном макете карты, чтобы показать ряд основных принципов. Текст часто является большой частью веб-контента. CSS имеет несколько вариантов выравнивания его свойством <code>text-align</code> . <code>text-align: justify;</code> вызывает все строки текста, кроме последней строки, для соответствия левому и правому краям строки. <code>text-align: center;</code> центрирует текст <code>text-align: right;</code> выравнивание по правому краю текста и <code>text-align: left;</code> (по умолчанию) выравнивает текст по левому краю.
</section>

## Instructions
<section id='instructions'>
Необходимо выровнять текст тега <code>h4</code>, в котором говорится «Google», по центру. Затем выровнять тег абзаца, который содержит информацию о том, как Google был основан.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the text-align property on the <code>h4</code> tag to set it to center.
    testString: assert($('h4').css('text-align') == 'center');
  - text: Your code should use the text-align property on the <code>p</code> tag to set it to justify.
    testString: assert($('p').css('text-align') == 'justify');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
