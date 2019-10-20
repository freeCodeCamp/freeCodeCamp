---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cVZ8vfD
forumTopicId: 301124
localeTitle: Создание промежутка у столбца с помощью grid-column-gap
---

## Description
<section id='description'>
До сих пор в гридах, которые вы создавали, столбцы были рядом друг с другом. Иногда вам нужен промежуток между столбцами. Чтобы добавить промежуток между столбцами, используйте свойство <code>grid-column-gap</code> следующим образом: <blockquote> grid-column-gap: 10px; </blockquote> Пример задаёт 10px пустого пространства между всеми нашими столбцами.
</section>

## Instructions
<section id='instructions'>
Задайте столбцам в гриде промежуток <code>20px</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi));

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
var code = ".container {grid-column-gap: 20px;}"
```

</section>
