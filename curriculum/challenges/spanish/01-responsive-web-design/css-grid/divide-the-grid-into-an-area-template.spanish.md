---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
localeTitle: Divide la cuadrícula en una plantilla de área
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Puede agrupar las celdas de su cuadrícula en un <dfn>área</dfn> y darle al área un nombre personalizado. Haga esto utilizando <code>grid-template-areas</code> en el contenedor como esto: 
<blockquote>grid-template-areas:<br>&nbsp;&nbsp;"header header header"<br>&nbsp;&nbsp;"advert content content"<br>&nbsp;&nbsp;"footer footer footer";</blockquote> 
El código anterior combina las tres celdas superiores juntas en un área llamada <code>header</code> , las tres celdas inferiores en un área de <code>footer</code> , y forma dos áreas en la fila central; <code>advert</code> y <code>content</code> . 
<strong>Nota</strong> <br> Cada palabra en el código representa una celda y cada par de comillas representa una fila. 
Además de las etiquetas personalizadas, puede usar un punto ( <code>.</code> ) Para designar una celda vacía en la cuadrícula. 
</section>

## Instructions
<section id='instructions'> 
Coloque la plantilla de área para que la celda etiquetada como <code>advert</code> convierta en una celda vacía. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad de <code>grid-template-areas</code> similar a la vista previa, pero tiene <code>.</code> En lugar del área de <code>advert</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-areas</code> propertiy similar to the preview but has <code>.</code> instead of the <code>advert</code> area.");'

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* change code below this line */

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* change code above this line */
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
var code = ".container {grid-template-areas: \"header header header\" \". content content\" \"footer footer footer\";}"
```

</section>
