---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
localeTitle: Crea tu primera cuadrícula CSS
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Convierta cualquier elemento HTML en un contenedor de cuadrícula estableciendo su propiedad de <code>display</code> en <code>grid</code> . Esto le da la posibilidad de usar todas las demás propiedades asociadas con CSS Grid. 
<strong>Nota</strong> <br> En CSS Grid, el elemento padre se conoce como el <dfn>contenedor</dfn> y sus hijos se denominan <dfn>elementos</dfn> . 
</section>

## Instructions
<section id='instructions'> 
Cambie la visualización del div con la clase de <code>container</code> a <code>grid</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: clase de <code>container</code> debe tener una propiedad de <code>display</code> con un valor de <code>grid</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.");'

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
var code = ".container {display: grid;}"
```

</section>
