---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cJbpKHq
forumTopicId: 301122
localeTitle: Выравнивание элемента по горизонтали, используя justify-self
---

## Description
<section id='description'>
В CSS Grid содержимое каждого элемента находится в так называемой <dfn>ячейке</dfn> . Вы можете выравнивать содержимое внутри ячейки по горизонтали, используя свойство <code>justify-self</code> для элемента грида. По умолчанию это свойство имеет значение <code>stretch</code> , т.е. содержимое заполняет всю ширину ячейки. Это свойство CSS Grid принимает и другие значения: <code>start</code> : выравнивает содержимое по левую сторону ячейки, <code>center</code> : выравнивает содержимое по центру ячейки, <code>end</code> : выравнивает содержимое по правую сторону ячейки.
</section>

## Instructions
<section id='instructions'>
Используйте свойство <code>justify-self</code> для выравнивания элемента с классом <code>item2</code> по центру ячейки.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.
    testString: assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* add your code below this line */


    /* add your code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
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
var code = ".item2 {justify-self: center;}"
```

</section>
