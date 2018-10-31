---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: ''
localeTitle: Alinhar um item verticalmente usando auto-alinhamento
---

## Description
<section id="description"> Assim como você pode alinhar um item horizontalmente, há uma maneira de alinhar um item verticalmente também. Para fazer isso, você usa a propriedade <code>align-self</code> em um item. Esta propriedade aceita todos os mesmos valores que <code>justify-self</code> do último desafio. </section>

## Instructions
<section id="instructions"> Alinhar o item com a classe <code>item3</code> verticalmente no <code>end</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> classe <code>item3</code> deve ter uma propriedade <code>align-self</code> que tenha o valor de <code>end</code> .
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>align-self</code> property that has the value of <code>end</code>.");'

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

```js
// solution required
```
</section>
