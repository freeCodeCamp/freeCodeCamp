---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
localeTitle: Utilice las unidades de cuadrícula de CSS para cambiar el tamaño de las columnas y las filas
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Puede usar unidades absolutas y relativas como <code>px</code> y <code>em</code> en CSS Grid para definir el tamaño de las filas y columnas. También puede usar estos: 
<code>fr</code> : establece la columna o fila a una fracción del espacio disponible, 
<code>auto</code> : establece la columna o fila al ancho o alto de su contenido automáticamente, 
<code>%</code> : ajusta la columna o fila a El porcentaje de ancho de su contenedor. 
Aquí está el código que genera el resultado en la vista previa: 
<blockquote>grid-template-columns: auto 50px 10% 2fr 1fr;</blockquote> 
Este fragmento crea cinco columnas. La primera columna es tan ancha como su contenido, la segunda columna es 50px, la tercera columna es el 10% de su contenedor, y para las dos últimas columnas; El espacio restante se divide en tres secciones, dos se asignan para la cuarta columna y una para la quinta. 
</section>

## Instructions
<section id='instructions'> 
Haz una cuadrícula con tres columnas cuyos anchos sean los siguientes: 1fr, 100px y 2fr. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;la clase <code>container</code> debe tener una propiedad de <code>grid-template-columns</code> que tenga tres columnas con los siguientes anchos: <code>1fr, 100px, and 2fr</code> &#39;.
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.");'

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
    /* modify the code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* modify the code above this line */
    grid-template-rows: 50px 50px;
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
var code = ".container {grid-template-columns: 1fr 100px 2fr;}"
```

</section>
