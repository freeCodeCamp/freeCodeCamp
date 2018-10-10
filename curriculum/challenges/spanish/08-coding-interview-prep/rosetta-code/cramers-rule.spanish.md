---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
localeTitle: 59713da0a428c1a62d7db430
challengeType: 5
---

## Description
<section id='description'>
<p> En <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp: álgebra lineal">álgebra lineal</a> , <a href="https://en.wikipedia.org/wiki/Cramer's rule" title="wp: la regla de cramer">la regla de Cramer</a> es una fórmula explícita para la solución de un <a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp: sistema de ecuaciones lineales">sistema de ecuaciones lineales</a> con tantas ecuaciones como incógnitas, válida siempre que el sistema tenga una solución única. Expresa la solución en términos de los determinantes de la matriz del coeficiente (cuadrado) y de las matrices obtenidas de ella al reemplazar una columna por el vector de los lados derechos de las ecuaciones. </p>
<p> Dado </p>
<p> </p>
<p> $ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z &amp; = {\ color {red} d_1} \\ a_2x + b_2y + c_2z &amp; = {\ color {red} d_2} \\ a_3x + b_3y + c_3z &amp; = {\ color {rojo} d_3} \ fin {matriz} \ derecha. $ </p>
<p> que en formato matricial es </p><p></p>
<p> $ \ begin {bmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {rojo} d_1} \\ {\ color {rojo} d_2} \\ {\ color {rojo} d_3} \ fin {bmatrix}. $ </p>
<p> Luego, los valores de $ x, y $ y $ z $ se pueden encontrar de la siguiente manera: </p><p></p>
<p> $ x = \ frac {\ begin {vmatrix} {\ color {red} d_1} &amp; b_1 &amp; c_1 \\ {\ color {red} d_2} &amp; b_2 &amp; c_2 \\ {\ color {red} d_3} &amp; b_3 &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ quad y = \ frac {\ begin {vmatrix } a_1 &amp; {\ color {red} d_1} &amp; c_1 \\ a_2 &amp; {\ color {red} d_2} &amp; c_2 \\ a_3 &amp; {\ color {red} d_3} &amp; c_3 \ end {vmatrix}} {\ comenzar {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ text {and} z = \ frac {\ begin {vmatrix} a_1 &amp; b_1 &amp; {\ color {rojo} d_1} \\ a_2 &amp; b_2 &amp; {\ color {red} d_2} \\ a_3 &amp; b_3 &amp; {\ color {rojo} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}. $ </p>

Tarea
<p> Dado el siguiente sistema de ecuaciones: </p><p> <big>
$ \ begin {cases}
2w-x + 5y + z = -3 \\
3w + 2x + 2y-6z = -32 \\
w + 3x + 3y-z = -47 \\
5w-2x -3y + 3z = 49 \\
\ fin {casos} $ <code>0</code></big> </p>
<p> resuelve por <big>$ w $, $ x $, $ y $</big> y <big>$ z $</big> , usando la regla de Cramer. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code> es una función.
    testString: 'assert(typeof cramersRule === "function", "<code>cramersRule</code> is a function.");'
  - text: ' <code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> debe devolver <code>[2, -12, -4, 1]</code> . '
    testString: 'assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0], "<code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.");'
  - text: ' <code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> debe devolver <code>[1, 1, -1]</code> .
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
/**
 * Compute Cramer's Rule
 * @param  {array} matrix    x,y,z, etc. terms
 * @param  {array} freeTerms
 * @return {array}           solution for x,y,z, etc.
 */
function cramersRule(matrix, freeTerms) {
  const det = detr(matrix);
  const returnArray = [];
  let i;

  for (i = 0; i < matrix[0].length; i++) {
    const tmpMatrix = insertInTerms(matrix, freeTerms, i);
    returnArray.push(detr(tmpMatrix) / det);
  }
  return returnArray;
}

/**
 * Inserts single dimensional array into
 * @param  {array} matrix multidimensional array to have ins inserted into
 * @param  {array} ins single dimensional array to be inserted vertically into matrix
 * @param  {array} at  zero based offset for ins to be inserted into matrix
 * @return {array}     New multidimensional array with ins replacing the at column in matrix
 */
function insertInTerms(matrix, ins, at) {
  const tmpMatrix = clone(matrix);
  let i;
  for (i = 0; i < matrix.length; i++) {
    tmpMatrix[i][at] = ins[i];
  }
  return tmpMatrix;
}
/**
 * Compute the determinate of a matrix.  No protection, assumes square matrix
 * function borrowed, and adapted from MIT Licensed numericjs library (www.numericjs.com)
 * @param  {array} m Input Matrix (multidimensional array)
 * @return {number}   result rounded to 2 decimal
 */
function detr(m) {
  let ret = 1;
  let j;
  let k;
  const A = clone(m);
  const n = m[0].length;
  let alpha;

  for (j = 0; j < n - 1; j++) {
    k = j;
    for (let i = j + 1; i < n; i++) { if (Math.abs(A[i][j]) > Math.abs(A[k][j])) { k = i; } }
    if (k !== j) {
      const temp = A[k]; A[k] = A[j]; A[j] = temp;
      ret *= -1;
    }
    const Aj = A[j];
    for (let i = j + 1; i < n; i++) {
      const Ai = A[i];
      alpha = Ai[j] / Aj[j];
      for (k = j + 1; k < n - 1; k += 2) {
        const k1 = k + 1;
        Ai[k] -= Aj[k] * alpha;
        Ai[k1] -= Aj[k1] * alpha;
      }
      if (k !== n) { Ai[k] -= Aj[k] * alpha; }
    }
    if (Aj[j] === 0) { return 0; }
    ret *= Aj[j];
  }
  return Math.round(ret * A[j][j] * 100) / 100;
}

/**
 * Clone two dimensional Array using ECMAScript 5 map function and EcmaScript 3 slice
 * @param  {array} m Input matrix (multidimensional array) to clone
 * @return {array}   New matrix copy
 */
function clone(m) {
  return m.map(a => a.slice());
}

```

</section>
