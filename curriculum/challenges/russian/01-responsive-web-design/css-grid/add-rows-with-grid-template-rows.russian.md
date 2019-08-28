---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cbp9Pua
forumTopicId: 301119
localeTitle: Добавление строк с grid-template-rows
---

## Description
<section id='description'>
Грид, который вы создали в прошлом упражнении, автоматически устанавливает количество строк. Чтобы вручную задать строки, используйте свойство <code>grid-template-rows</code> точно также как вы использовали <code>grid-template-columns</code> в предыдущем упражнении.
</section>

## Instructions
<section id='instructions'>
Добавьте две строки в грид, каждая высотой <code>50px</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-rows</code> property with two units of <code>50px</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi));

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
    grid-template-columns: 100px 100px 100px;
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
var code = ".container {grid-template-rows: 50px 50px;}"
```

</section>
