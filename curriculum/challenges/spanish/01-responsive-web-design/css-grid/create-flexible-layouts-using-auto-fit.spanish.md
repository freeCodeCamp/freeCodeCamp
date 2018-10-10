---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: ''
localeTitle: Crear diseños flexibles con autoajuste
---

## Description
<section id="description"> <code>auto-fit</code> funciona de <code>auto-fit</code> casi idéntica al <code>auto-fill</code> . La única diferencia es que cuando el tamaño del contenedor excede el tamaño de todos los elementos combinados, el <code>auto-fill</code> continúa insertando filas o columnas vacías y empuja sus artículos hacia un lado, mientras que <code>auto-fit</code> colapsa esas filas o columnas vacías y extiende sus artículos a Ajustar el tamaño del contenedor. <strong>Nota</strong> <br> Si su contenedor no puede colocar todos sus artículos en una fila, los moverá a uno nuevo. </section>

## Instructions
<section id="instructions"> En la segunda cuadrícula, use <code>auto-fit</code> con <code>repeat</code> para llenar la cuadrícula con columnas que tengan un ancho mínimo de <code>60px</code> y un máximo de <code>1fr</code> . Luego cambia el tamaño de la vista previa para ver la diferencia. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container2</code> clase <code>container2</code> debe tener una propiedad de <code>grid-template-columns</code> con <code>repeat</code> y <code>auto-fit</code> que llenará la cuadrícula con columnas que tengan un ancho mínimo de <code>60px</code> y máximo de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
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
<div class="container2">
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
