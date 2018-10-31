---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: ''
localeTitle: Alinear un elemento verticalmente con align-self
---

## Description
<section id="description"> Al igual que puede alinear un elemento horizontalmente, también hay una forma de alinear un elemento verticalmente. Para hacer esto, utiliza la propiedad <code>align-self</code> en un elemento. Esta propiedad acepta todos los mismos valores como <code>justify-self</code> del último desafío. </section>

## Instructions
<section id="instructions"> Alinea el elemento con la clase <code>item3</code> verticalmente al <code>end</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> clase <code>item3</code> debe tener una propiedad <code>align-self</code> que tenga el valor de <code>end</code> .
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
