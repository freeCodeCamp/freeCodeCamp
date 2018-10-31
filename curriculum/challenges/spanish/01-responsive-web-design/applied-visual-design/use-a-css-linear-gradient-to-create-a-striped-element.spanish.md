---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: ''
localeTitle: Use un gradiente lineal de CSS para crear un elemento de rayas
---

## Description
<section id="description"> La función de <code>repeating-linear-gradient()</code> es muy similar a la <code>linear-gradient()</code> con la diferencia principal de que repite el patrón de gradiente especificado. <code>repeating-linear-gradient()</code> acepta una variedad de valores, pero por simplicidad, trabajará con un valor de ángulo y valores de parada de color en este desafío. El valor del ángulo es la dirección del gradiente. Las paradas de color son como los valores de ancho que marcan el lugar donde se produce una transición, y se dan con un porcentaje o un número de píxeles. En el ejemplo que se muestra en el editor de código, el degradado comienza con el color <code>yellow</code> en 0 píxeles, que se mezcla con el segundo color <code>blue</code> a 40 píxeles desde el principio. Dado que la siguiente parada de color también es de 40 píxeles, el degradado cambia inmediatamente al <code>green</code> tercer color, que a su vez se mezcla con el valor del color <code>red</code> ya que está a 80 píxeles del comienzo del degradado. Para este ejemplo, es útil pensar en las paradas de color como pares donde cada dos colores se mezclan. <code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code> Si todos los valores de parada de dos colores son del mismo color, la mezcla no se nota porque está entre el mismo color, seguida de una transición difícil Al siguiente color, así terminas con rayas. </section>

## Instructions
<section id="instructions"> Haga rayas cambiando el <code>repeating-linear-gradient()</code> para usar un ángulo de gradiente de <code>45deg</code> grados, luego establezca las dos primeras paradas de color en <code>yellow</code> , y finalmente las segundas dos paradas en <code>black</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El ángulo del <code>repeating-linear-gradient()</code> debe ser de 45 grados.
    testString: 'assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should be 45deg.");'
  - text: El ángulo de la <code>repeating-linear-gradient()</code> ya no debe ser de 90 grados
    testString: 'assert(!code.match(/90deg/gi), "The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg");'
  - text: La parada de color en 0 píxeles debe ser <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?0(px)?/gi), "The color stop at 0 pixels should be <code>yellow</code>.");'
  - text: Una parada de color a 40 píxeles debe ser <code>yellow</code> .
    testString: 'assert(code.match(/yellow\s+?40px/gi), "One color stop at 40 pixels should be <code>yellow</code>.");'
  - text: La segunda parada de color a 40 píxeles debe ser <code>black</code> .
    testString: 'assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi), "The second color stop at 40 pixels should be <code>black</code>.");'
  - text: La última parada de color en 80 píxeles debe ser <code>black</code> .
    testString: 'assert(code.match(/black\s+?80px/gi), "The last color stop at 80 pixels should be <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
