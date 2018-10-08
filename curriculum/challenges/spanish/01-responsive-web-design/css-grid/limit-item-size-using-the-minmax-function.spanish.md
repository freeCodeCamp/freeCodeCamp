---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
localeTitle: Limitar el tamaño del elemento utilizando la función minmax
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Hay otra función incorporada para usar con <code>grid-template-columns</code> <code>grid-template-rows</code> llamada <code>minmax</code> . Se utiliza para limitar el tamaño de los elementos cuando el contenedor de cuadrícula cambia de tamaño. Para hacer esto, necesita especificar el rango de tamaño aceptable para su artículo. Aquí hay un ejemplo: 
<blockquote>grid-template-columns: 100px minmax(50px, 200px);</blockquote> 
En el código anterior, <code>grid-template-columns</code> está configurado para crear dos columnas; el primero tiene un ancho de 100 px y el segundo tiene el ancho mínimo de 50 px y el ancho máximo de 200 px. 
</section>

## Instructions
<section id='instructions'> 
Con la función <code>minmax</code> , reemplace el <code>1fr</code> en la función de <code>repeat</code> con un tamaño de columna que tenga el ancho mínimo de <code>90px</code> y el ancho máximo de <code>1fr</code> , y <code>1fr</code> tamaño del panel de vista previa para ver el efecto. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase <code>container</code> debe tener una propiedad de <code>grid-template-columns</code> que está configurada para repetir 3 columnas con un ancho mínimo de <code>90px</code> y un ancho máximo de <code>1fr</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* change the code above this line */
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
var code = ".container {grid-template-columns: repeat(3, minmax(90px, 1fr));}"
```

</section>
