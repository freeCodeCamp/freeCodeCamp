---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cqwREC4
forumTopicId: 301129
localeTitle: Создайте свой первый CSS Grid
---

## Description
<section id='description'>
Чтобы превратить любой HTML элемент в грид контейнер установите свойство <code>display</code> в <code>grid</code> . Это даёт вам возможность использовать другие свойства, связанные с CSS Grid. <strong>Примечание</strong> <br> В CSS Grid родительский элемент называется <dfn>контейнером,</dfn> а его дочерние элементы называются <dfn>элементами</dfn> .
</section>

## Instructions
<section id='instructions'>
Измените свойство display у элемента div с классом <code>container</code> на <code>grid</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

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
var code = ".container {display: grid;}"
```

</section>
