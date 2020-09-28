---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: ''
localeTitle: Añadir columnas con cuadrícula-plantilla-columnas
---

## Description
<section id="description"> Crear un elemento de cuadrícula no te llevará muy lejos. También es necesario definir la estructura de la cuadrícula. Para agregar algunas columnas a la cuadrícula, use la propiedad <code>grid-template-columns</code> en un contenedor de cuadrícula como se muestra a continuación: 
  
 ```html
.container { 
  display: grid; 
  grid-template-columns: 50px 50px;
} 
```
 
Esto le dará a tu cuadrícula dos columnas de 50px de ancho cada una. El número de parámetros dados a la propiedad <code>grid-template-columns</code> indica el número de columnas en la cuadrícula, y el valor de cada parámetro indica el ancho de cada columna. </section>

## Instructions
<section id="instructions"> Definir al contenedor de la cuadrícula tres columnas de <code>100px</code> de ancho cada una. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad de <code>grid-template-columns</code> con tres unidades de <code>100px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), "<code>container</code> La clase debe tener una propiedad <code>grid-template-columns</code> cons tres unidades de <code>100px</code>.");'

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
    width: 100%;
    background: LightGray;
    display: grid;
    /* agrega tu código abajo de esta línea */


    /* agrega tu código arriba de esta línea */
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
