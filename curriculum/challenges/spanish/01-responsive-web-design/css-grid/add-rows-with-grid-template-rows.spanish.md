---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
localeTitle: Añadir filas con cuadrícula-filas-plantilla
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
La cuadrícula que creó en el último desafío establecerá el número de filas automáticamente. Para ajustar las filas manualmente, use la propiedad <code>grid-template-rows</code> de la misma forma que usó <code>grid-template-columns</code> en el desafío anterior. 
</section>

## Instructions
<section id='instructions'> 
Agregue dos filas a la cuadrícula que tengan <code>50px</code> altura cada una. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad <code>grid-template-rows</code> con dos unidades de <code>50px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-rows</code> property with two units of <code>50px</code>.");'

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
    grid-template-columns: 100px 100px 100px;
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
var code = ".container {grid-template-rows: 50px 50px;}"
```

</section>
