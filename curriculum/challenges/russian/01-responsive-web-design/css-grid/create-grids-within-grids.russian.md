---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/c6N78Ap
forumTopicId: 301128
localeTitle: Создание гридов в сетках
---

## Description
<section id='description'>
Включение элемента в сетку влияет только на поведение его прямых потомков. Поэтому, превратив прямого потомка в сетку, у вас есть сетка внутри сетки. Например, задав свойства <code>display</code> и <code>grid-template-columns</code> элемента с классом <code>item3</code> , вы создаете сетку в своей сетке.
</section>

## Instructions
<section id='instructions'>
Поверните элемент с классом <code>item3</code> в сетку с двумя столбцами с шириной <code>auto</code> и <code>1fr</code> используя <code>1fr</code> <code>display</code> и <code>grid-template-columns</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.
    testString: assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi));
  - text: <code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.
    testString: assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */


    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
var code = ".item3 {grid-template-columns: auto 1fr; display: grid;}"
```

</section>
