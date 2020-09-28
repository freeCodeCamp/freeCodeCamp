---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cRrqmtV
forumTopicId: 301132
localeTitle: Поместите объекты в области сетки Используя свойство сетки
---

## Description
<section id='description'>
После создания шаблона областей для вашего контейнера сетки, как показано в предыдущем вызове, вы можете поместить элемент в свою настраиваемую область, указав имя, которое вы ему дали. Для этого вы используете свойство <code>grid-area</code> для элемента, подобного этому: <blockquote> .item1 {grid-area: header; } </blockquote> Это позволяет сетке знать, что вы хотите, чтобы класс <code>item1</code> находился в <code>header</code> . В этом случае элемент будет использовать всю верхнюю строку, потому что целая строка называется зоной заголовка.
</section>

## Instructions
<section id='instructions'>
Поместите элемент с классом <code>item5</code> в область <code>item5</code> <code>footer</code> используя свойство <code>grid-area</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
var code = ".item5 {grid-area: footer;}"
```

</section>
