---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: ''
localeTitle: Crear cuadrículas dentro de cuadrículas
---

## Description
<section id="description"> Convertir un elemento en una cuadrícula solo afecta el comportamiento de sus descendientes directos. Entonces, al convertir un descendiente directo en una cuadrícula, tiene una cuadrícula dentro de una cuadrícula. Por ejemplo, al configurar las propiedades de <code>display</code> y <code>grid-template-columns</code> del elemento con la clase <code>item3</code> , creará una cuadrícula dentro de su cuadrícula. </section>

## Instructions
<section id="instructions"> Convierta el elemento con la clase <code>item3</code> en una cuadrícula con dos columnas con un ancho de <code>auto</code> y <code>1fr</code> usando las <code>1fr</code> <code>display</code> y <code>grid-template-columns</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> clase <code>item3</code> debe tener una propiedad <code>grid-template-columns</code> con <code>auto</code> y <code>1fr</code> como valores.
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.");'
  - text: <code>item3</code> clase <code>item3</code> debe tener una propiedad de <code>display</code> con el valor de <code>grid</code> .
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */


    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
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
