---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
localeTitle: Crear una brecha de columna usando grid-column-gap
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Hasta ahora, en las cuadrículas que has creado, las columnas han estado apretadas una contra la otra. A veces quieres un espacio entre las columnas. Para agregar un espacio entre las columnas, use la propiedad <code>grid-column-gap</code> así: 
<blockquote>grid-column-gap: 10px;</blockquote> 
Esto crea 10 px de espacio vacío entre todas nuestras columnas. 
</section>

## Instructions
<section id='instructions'> 
Dé a las columnas en la cuadrícula un espacio de <code>20px</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad <code>grid-column-gap</code> que tenga el valor de <code>20px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.");'

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
var code = ".container {grid-column-gap: 20px;}"
```

</section>
