---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: ''
localeTitle: Agregue espacios más rápido con la rejilla
---

## Description
<section id="description"> <code>grid-gap</code> es una propiedad abreviada de <code>grid-row-gap</code> y <code>grid-column-gap</code> de los dos desafíos anteriores, que es más conveniente de usar. Si <code>grid-gap</code> tiene un valor, creará una brecha entre todas las filas y columnas. Sin embargo, si hay dos valores, utilizará el primero para establecer el espacio entre las filas y el segundo valor para las columnas. </section>

## Instructions
<section id="instructions"> Usa <code>grid-gap</code> para introducir un espacio de <code>10px</code> entre las filas y un espacio de <code>20px</code> entre las columnas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> La clase <code>container</code> debe tener una propiedad de <code>grid-gap</code> que introduce <code>10px</code> espacio de <code>10px</code> entre las filas y un espacio de <code>20px</code> entre las columnas.
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.");'

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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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

```js
// solution required
```
</section>
