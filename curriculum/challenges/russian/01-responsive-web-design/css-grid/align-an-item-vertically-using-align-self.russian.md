---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: https://scrimba.com/p/pByETK/cmzd4fz
forumTopicId: 301123
localeTitle: Выровнять элемент по вертикали, используя выравнивание
---

## Description
<section id='description'>
Так же, как вы можете выровнять элемент по горизонтали, есть способ выровнять элемент по вертикали. Для этого вы используете свойство <code>align-self</code> для элемента. Это свойство принимает все те же значения, что и <code>justify-self</code> из последнего вызова.
</section>

## Instructions
<section id='instructions'>
Выровняйте элемент с элементом <code>item3</code> вертикально в <code>end</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> class should have a <code>align-self</code> property that has the value of <code>end</code>.
    testString: assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* add your code below this line */


    /* add your code above this line */
  }

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
var code = ".item3 {align-self: end;}"
```

</section>
