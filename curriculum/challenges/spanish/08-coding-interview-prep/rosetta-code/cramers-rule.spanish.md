---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
challengeType: 5
videoUrl: ''
localeTitle: Regla de cramer
---

## Description
<section id="description"><p> En <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp: álgebra lineal">álgebra lineal</a> , <a href="https://en.wikipedia.org/wiki/Cramer&#x27;s rule" title="wp: la regla de cramer">la regla de Cramer</a> es una fórmula explícita para la solución de un <a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp: sistema de ecuaciones lineales">sistema de ecuaciones lineales</a> con tantas ecuaciones como incógnitas, válida siempre que el sistema tenga una solución única. Expresa la solución en términos de los determinantes de la matriz del coeficiente (cuadrado) y de las matrices obtenidas de ella al reemplazar una columna por el vector de los lados derechos de las ecuaciones. </p><p> Dado </p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z &amp; = {\ color {red} d_1} \\ a_2x + b_2y + c_2z &amp; = {\ color {red} d_2} \\ a_3x + b_3y + c_3z &amp; = {\ color {rojo} d_3} \ fin {matriz} \ derecha. $</big> </p><p> que en formato matricial es </p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {rojo} d_1} \\ {\ color {rojo} d_2} \\ {\ color {rojo} d_3} \ fin {bmatrix}. $</big> </p><p> Luego, los valores de $ x, y $ y $ z $ se pueden encontrar de la siguiente manera: </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1} &amp; b_1 &amp; c_1 \\ {\ color {red} d_2} &amp; b_2 &amp; c_2 \\ {\ color {red} d_3} &amp; b_3 &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ quad y = \ frac {\ begin {vmatrix } a_1 &amp; {\ color {red} d_1} &amp; c_1 \\ a_2 &amp; {\ color {red} d_2} &amp; c_2 \\ a_3 &amp; {\ color {red} d_3} &amp; c_3 \ end {vmatrix}} {\ comenzar {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ text {and} z = \ frac {\ begin {vmatrix} a_1 &amp; b_1 &amp; {\ color {rojo} d_1} \\ a_2 &amp; b_2 &amp; {\ color {red} d_2} \\ a_3 &amp; b_3 &amp; {\ color {rojo} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}. $</big> </p> Tarea <p> Dado el siguiente sistema de ecuaciones: </p><p> <big>$ \ begin {cases} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \\ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {cases} $</big> </p><p> resuelve por <big>$ w $, $ x $, $ y $</big> y <big>$ z $</big> , usando la regla de Cramer. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code> es una función.
    testString: 'assert(typeof cramersRule === "function", "<code>cramersRule</code> is a function.");'
  - text: '<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> debe devolver <code>[2, -12, -4, 1]</code> .'
    testString: 'assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0], "<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.");'
  - text: '<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> debe devolver <code>[1, 1, -1]</code> .'
    testString: 'assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1], "<code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> should return <code>[1, 1, -1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cramersRule (matrix, freeTerms) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
