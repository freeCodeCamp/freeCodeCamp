---
id: 5a94fdf869fb03452672e45b
title: Align All Items Vertically using align-items
challengeType: 0
videoUrl: ''
localeTitle: Alinear todos los elementos verticalmente utilizando elementos de alineación
---

## Description
<section id="description"> El uso de la propiedad <code>align-items</code> en un contenedor de cuadrícula establecerá la alineación vertical para todos los elementos en nuestra cuadrícula. </section>

## Instructions
<section id="instructions"> Úselo ahora para mover todos los elementos al final de cada celda. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad <code>align-items</code> que tenga el valor de <code>end</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*align-items\s*?:\s*?end\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>align-items</code> property that has the value of <code>end</code>.");'

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

```js
// solution required
```
</section>
