---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: ''
localeTitle: Crear diseños flexibles con autocompletar
---

## Description
<section id="description"> La función de repetición viene con una opción llamada <dfn>autocompletar</dfn> . Esto le permite insertar automáticamente tantas filas o columnas del tamaño deseado como sea posible, dependiendo del tamaño del contenedor. Puede crear diseños flexibles al combinar <code>auto-fill</code> con <code>minmax</code> . En la vista previa, <code>grid-template-columns</code> se establecen en <blockquote> repetir (autocompletar, minmax (60px, 1fr)); </blockquote> Cuando el contenedor cambia de tamaño, esta configuración continúa insertando columnas de 60 px y estirándolas hasta que pueda insertar otra. <strong>Nota</strong> <br> Si su contenedor no puede colocar todos sus artículos en una fila, los moverá a uno nuevo. </section>

## Instructions
<section id="instructions"> En la primera cuadrícula, use <code>auto-fill</code> con <code>repeat</code> para llenar la cuadrícula con columnas que tengan un ancho mínimo de <code>60px</code> y un máximo de <code>1fr</code> . Luego cambie el tamaño de la vista previa para ver la acción de autocompletar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad de <code>grid-template-columns</code> con <code>repeat</code> y <code>auto-fill</code> que llenará la cuadrícula con columnas que tengan un ancho mínimo de <code>60px</code> y un máximo de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
