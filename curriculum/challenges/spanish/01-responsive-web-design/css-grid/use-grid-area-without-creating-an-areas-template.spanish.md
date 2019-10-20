---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: ''
localeTitle: Usar área de cuadrícula sin crear una plantilla de áreas
---

## Description
<section id="description"> La propiedad de <code>grid-area</code> que aprendiste en el último desafío se puede usar de otra manera. Si su cuadrícula no tiene una plantilla de áreas a la que hacer referencia, puede crear un área sobre la marcha para colocar un elemento como este: <blockquote> item1 {grid-area: 1/1/2/4; } </blockquote> Esto es utilizar los números de línea que aprendió anteriormente para definir dónde estará el área para este elemento. Los números en el ejemplo anterior representan estos valores: <blockquote> área de la cuadrícula: línea horizontal para comenzar en / línea vertical para comenzar en / línea horizontal para terminar en / línea vertical para terminar en; </blockquote> Así que el elemento en el ejemplo consumirá las filas entre las líneas 1 y 2, y las columnas entre las líneas 1 y 4. </section>

## Instructions
<section id="instructions"> Usando la propiedad del <code>grid-area</code> la <code>grid-area</code> , coloque el elemento con la clase <code>item5</code> entre las líneas horizontales tercera y cuarta y entre las líneas verticales primera y cuarta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La clase <code>item5</code> debe tener una propiedad de <code>grid-area</code> de modo que esté entre las líneas horizontales tercera y cuarta y entre las líneas verticales primera y cuarta.
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), "La clase <code>item5</code> debe tener una propiedad de <code>grid-area</code> de modo que esté entre las líneas horizontales tercera y cuarta y entre las líneas verticales primera y cuarta.");'

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

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
// solution required
```
</section>
