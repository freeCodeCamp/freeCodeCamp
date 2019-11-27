---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: https://scrimba.com/c/cvVZdUd
forumTopicId: 301031
localeTitle: Добавьте тень к карточному элементу
---

## Description
<section id='description'>
Свойство <code>box-shadow</code> применяет одну или несколько теней к элементу. Свойство <code>box-shadow</code> принимает значения для <code>offset-x</code> (как далеко отбрасывать тень горизонтально от элемента), <code>offset-y</code> (как далеко отбрасывать тень вертикально от элемента), <code>blur-radius</code> <code>spread-radius</code> и значения цвета в этом порядке. Значения <code>blur-radius</code> и <code>spread-radius</code> необязательны. Вот пример CSS для создания нескольких теней с некоторым размытием в основном прозрачных черных цветах: <blockquote> box-shadow: 0 10px 20px rgba (0,0,0,0,19), 0 6px 6px rgba (0,0,0,0,23); </blockquote>
</section>

## Instructions
<section id='instructions'>
Элемент теперь имеет идентификатор <code>thumbnail</code>. С помощью этого селектора используйте приведенные выше примеры CSS, чтобы применить <code>box-shadow</code> к карточке.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.
    testString: assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
  - text: You should use the given CSS for the <code>box-shadow</code> value.
    testString: assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi));

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
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
