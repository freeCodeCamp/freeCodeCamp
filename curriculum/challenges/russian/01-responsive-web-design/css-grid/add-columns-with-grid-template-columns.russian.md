---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/c7NzDHv
forumTopicId: 301117
localeTitle: Добавление столбцов с grid-template-columns
---

## Description
<section id='description'>
Просто создать грид элемент недостаточно. Вам также необходимо определить структуру грида. Чтобы добавить несколько столбцов в грид, используйте свойство <code>grid-template-columns</code> в контейнере грида  как показано ниже: <blockquote> .container { <br> display: grid; <br> grid-template-columns: 50px 50px; <br> } </blockquote> Теперь в вашем гриде два столбца, каждый шириной 50 пикселей. Количество параметров, заданных для свойства <code>grid-template-columns</code> , указывает количество столбцов в сетке, а значение каждого параметра указывает ширину каждого столбца.
</section>

## Instructions
<section id='instructions'>
Задайте грид контейнеру три столбца, каждый шириной <code>100px</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi));

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
    width: 100%;
    background: LightGray;
    display: grid;
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
var code = ".container {grid-template-columns: 100px 100px 100px;}"
```

</section>
