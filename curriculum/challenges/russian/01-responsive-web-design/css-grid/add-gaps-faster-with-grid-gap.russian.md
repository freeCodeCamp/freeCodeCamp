---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/ca2qVtv
forumTopicId: 301118
localeTitle: Добавление промежутков быстрее с grid-gap
---

## Description
<section id='description'>
<code>grid-gap</code> - это сокращенное свойство для <code>grid-row-gap</code> и <code>grid-column-gap</code> из двух предыдущих упражнений, которое более удобно в использовании. Если <code>grid-gap</code> имеет одно значение, это создаст разрыв между всеми строками и столбцами. Однако, если есть два значения, он будет использовать первое, чтобы установить разрыв между строками, и второе значение - между столбцами.
</section>

## Instructions
<section id='instructions'>
Используйте <code>grid-gap</code> чтобы задать <code>10px</code> промежуток между строками и <code>20px</code> промежуток между столбцами.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
var code = ".container {grid-gap: 10px 20px;}"
```

</section>
