---
id: 5900f4691000cf542c50ff7b
challengeType: 5
title: 'Problem 252: Convex Holes'
videoUrl: ''
localeTitle: 'Problema 252: Agujeros Convexos'
---

## Description
<section id="description"> Dado un conjunto de puntos en un plano, definimos un orificio convexo como un polígono convexo que tiene como vértices cualquiera de los puntos dados y que no contiene ninguno de los puntos dados en su interior (además de los vértices, otros puntos dados pueden estar en el perímetro del polígono). <p> Como ejemplo, la imagen de abajo muestra un conjunto de veinte puntos y algunos de esos agujeros convexos. El orificio convexo que se muestra como un heptágono rojo tiene un área igual a 1049694.5 unidades cuadradas, que es el área más alta posible para un orificio convexo en el conjunto de puntos dado. </p><p> Para nuestro ejemplo, usamos los primeros 20 puntos (T2k − 1, T2k), para k = 1,2, ..., 20, producidos con el generador de números pseudoaleatorios: </p><p> S0 = 290797 Sn + 1 = Sn2 mod 50515093 Tn = (Sn mod 2000) - 1000 </p><p> es decir (527, 144), (−488, 732), (−454, −947), ... </p><p> ¿Cuál es el área máxima para un agujero convexo en el conjunto que contiene los primeros 500 puntos en la secuencia pseudoaleatoria? Especifique su respuesta incluyendo un dígito después del punto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler252()</code> debe devolver 104924.
    testString: 'assert.strictEqual(euler252(), 104924, "<code>euler252()</code> should return 104924.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler252() {
  // Good luck!
  return true;
}

euler252();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
