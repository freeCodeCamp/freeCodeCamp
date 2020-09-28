---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cJbpECn
forumTopicId: 301120
localeTitle: Выравнивание всех элементов по горизонтали с использованием оправдательных элементов
---

## Description
<section id='description'>
Иногда вы хотите, чтобы все элементы в вашей сетке CSS имели одинаковое выравнивание. Вы можете использовать ранее изученные свойства и выровнять их по отдельности, или вы можете выровнять их все горизонтально, используя <code>justify-items</code> в контейнере сетки. Это свойство может принимать все те же значения, о которых вы узнали в предыдущих двух задачах, разница в том, что он переместит <b>все</b> элементы нашей сетки в желаемое выравнивание.
</section>

## Instructions
<section id='instructions'>
Используйте это свойство, чтобы центрировать все наши объекты по горизонтали.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi));

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
    /* add your code below this line */


    /* add your code above this line */
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
var code = ".container {justify-items: center;}"
```

</section>
