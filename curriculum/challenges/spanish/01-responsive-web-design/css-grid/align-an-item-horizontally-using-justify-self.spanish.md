---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
localeTitle: Alinear un artículo horizontalmente usando justify-self
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
En CSS Grid, el contenido de cada elemento se encuentra en un cuadro al que se hace referencia como una <dfn>celda</dfn> . Puede alinear la posición del contenido dentro de su celda horizontalmente usando la propiedad de <code>justify-self</code> en un elemento de la cuadrícula. De forma predeterminada, esta propiedad tiene un valor de <code>stretch</code> , que hará que el contenido llene todo el ancho de la celda. Esta propiedad de la cuadrícula de CSS también acepta otros valores: 
<code>start</code> : alinea el contenido a la izquierda de la celda, 
<code>center</code> : alinea el contenido en el centro de la celda, 
<code>end</code> : alinea el contenido a la derecha de la celda. 
</section>

## Instructions
<section id='instructions'> 
Use la propiedad de <code>justify-self</code> para centrar el elemento con la clase <code>item2</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item2</code> clase <code>item2</code> debe tener una propiedad de <code>justify-self</code> que tenga el valor de <code>center</code> .
    testString: 'assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* add your code below this line */


    /* add your code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

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
var code = ".item2 {justify-self: center;}"
```

</section>
