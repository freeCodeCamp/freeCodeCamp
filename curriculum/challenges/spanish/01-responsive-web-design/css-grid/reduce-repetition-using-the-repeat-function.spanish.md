---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: ''
localeTitle: Reducir la repetición usando la función de repetición
---

## Description
<section id="description"> Cuando usaste <code>grid-template-columns</code> <code>grid-template-rows</code> para definir la estructura de una cuadrícula, ingresaste un valor para cada fila o columna que creaste. Digamos que quieres una cuadrícula con 100 filas de la misma altura. No es muy práctico insertar 100 valores individualmente. Afortunadamente, hay una mejor manera: utilizando la función de <code>repeat</code> para especificar el número de veces que deseas que se repita su columna o fila, seguido de una coma y el valor que deseas repetir. Aquí hay un ejemplo que crearía la cuadrícula de 100 filas, cada fila a 50px de altura. <blockquote> cuadrícula-plantilla-filas: repetir (100, 50px); </blockquote> También puedes repetir varios valores con la función de repetición e insertar la función entre otros valores al definir una estructura de cuadrícula. Esto es lo que quiero decir: <blockquote> cuadrícula-plantilla-columnas: repetir (2, 1fr 50px) 20px; </blockquote> Esto se traduce en: <blockquote> cuadrícula-plantillas-columnas: 1fr 50px 1fr 50px 20px; </blockquote> <strong>Nota</strong> <br> <code>1fr 50px</code> se repite dos veces seguidas de 20px. </section>

## Instructions
<section id="instructions"> Usa <code>repeat</code> para eliminar la repetición de la propiedad <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La clase <code>container</code><code>container</code> debe tener una propiedad de <code>grid-template-columns</code> que está configurada para repetir 3 columnas con el ancho de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.");'

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
    /* cambia el código abajo de esta línea */

    grid-template-columns: 1fr 1fr 1fr;

    /* cambia el código arriba de esta línea */
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
// solución requerida
```
</section>
