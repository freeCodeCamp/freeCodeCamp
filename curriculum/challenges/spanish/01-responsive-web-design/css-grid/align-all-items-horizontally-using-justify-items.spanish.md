---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
localeTitle: Alinear todos los elementos horizontalmente utilizando elementos justificados
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
A veces desea que todos los elementos en su Cuadrícula de CSS compartan la misma alineación. Puede usar las propiedades aprendidas anteriormente y alinearlas individualmente, o puede alinearlas todas a la vez de forma horizontal mediante el uso <code>justify-items</code> en su contenedor de cuadrícula. Esta propiedad puede aceptar todos los valores que aprendió en los dos desafíos anteriores, con la diferencia de que moverá <b>todos</b> los elementos de nuestra cuadrícula a la alineación deseada. 
</section>

## Instructions
<section id='instructions'> 
Utilice esta propiedad para centrar todos nuestros artículos horizontalmente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> clase de <code>container</code> debe tener una propiedad de <code>justify-items</code> que tenga el valor de <code>center</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.");'

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
    /* add your code below this line */


    /* add your code above this line */
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
var code = ".container {justify-items: center;}"
```

</section>
