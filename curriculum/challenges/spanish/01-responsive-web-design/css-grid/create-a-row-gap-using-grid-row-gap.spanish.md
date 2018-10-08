---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
localeTitle: Crear un espacio en la fila usando la rejilla-fila-espacio
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Se puede añadir un espacio entre las filas de una cuadrícula utilizando <code>grid-row-gap</code> de la misma manera que ha agregado un espacio entre columnas en el desafío anterior. 
</section>

## Instructions
<section id='instructions'> 
Crea un espacio para las filas que tiene <code>5px</code> altura. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad <code>grid-row-gap</code> que tenga el valor de <code>5px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-row-gap</code> property that has the value of <code>5px</code>.");'

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
var code = ".container {grid-row-gap: 5px;}"
```

</section>
