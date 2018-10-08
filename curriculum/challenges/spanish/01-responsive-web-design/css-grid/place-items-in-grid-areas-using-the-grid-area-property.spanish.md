---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
localeTitle: Colocar elementos en áreas de cuadrícula utilizando la propiedad de área de cuadrícula
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Después de crear una plantilla de áreas para su contenedor de cuadrícula, como se muestra en el desafío anterior, puede colocar un elemento en su área personalizada haciendo referencia al nombre que le dio. Para hacer esto, usa la propiedad del <code>grid-area</code> la <code>grid-area</code> en un elemento como este: 
<blockquote>.item1 { grid-area: header; }</blockquote> 
Esto le permite a la cuadrícula saber que desea que la clase <code>item1</code> en el área denominada <code>header</code> . En este caso, el elemento utilizará toda la fila superior porque toda esa fila se denomina área de encabezado. 
</section>

## Instructions
<section id='instructions'> 
Coloque un elemento con la clase <code>item5</code> en el área del <code>footer</code> usando la propiedad del <code>grid-area</code> la <code>grid-area</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> clase <code>item5</code> debe tener una propiedad de <code>grid-area</code> que tenga el valor de <code>footer</code> de <code>footer</code> .
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.");'

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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
var code = ".item5 {grid-area: footer;}"
```

</section>
