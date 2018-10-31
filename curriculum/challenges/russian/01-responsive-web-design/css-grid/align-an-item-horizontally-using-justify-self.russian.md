---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: ''
localeTitle: 'Выровнять элемент по горизонтали, используя оправдание'
---

## Description
<section id="description"> В CSS Grid содержимое каждого элемента находится в ящике, который называется <dfn>ячейкой</dfn> . Вы можете выравнивать позицию содержимого внутри своей ячейки по горизонтали, используя свойство <code>justify-self</code> для элемента сетки. По умолчанию это свойство имеет значение <code>stretch</code> , которое сделает содержимое заполнением всей ширины ячейки. Это свойство CSS Grid принимает и другие значения: <code>start</code> : выравнивает содержимое слева от ячейки, в <code>center</code> : выравнивает содержимое в центре ячейки, <code>end</code> : выравнивает содержимое справа от ячейки. </section>

## Instructions
<section id="instructions"> Используйте свойство <code>justify-self</code> для <code>item2</code> элемента с помощью <code>item2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: класс <code>item2</code> должен иметь свойство <code>justify-self</code> которое имеет значение <code>center</code> .
    testString: 'assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.");'

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

```js
// solution required
```
</section>
