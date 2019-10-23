---
title: Cramer's rule
id: 59713da0a428c1a62d7db430
challengeType: 5
forumTopicId: 302239
localeTitle: Правило Крамера
---

## Description
<section id='description'>
<p> В <a href="https://en.wikipedia.org/wiki/linear algebra" title="wp: линейная алгебра">линейной алгебре</a> <a href="https://en.wikipedia.org/wiki/Cramer&#x27;s rule" title="wp: правило Крамера">правило Крамера</a> является явной формулой для решения <a href="https://en.wikipedia.org/wiki/system of linear equations" title="wp: система линейных уравнений">системы линейных уравнений</a> с таким количеством уравнений, как неизвестные, действительные всякий раз, когда система имеет единственное решение. Он выражает решение в терминах детерминантов матрицы (квадратного) коэффициента и полученных из нее матриц путем замены одного столбца на вектор правых частей уравнений. </p><p> Данный </p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z &amp; = {\ color {red} d_1} \\ a_2x + b_2y + c_2z &amp; = {\ color {red} d_2} \\ a_3x + b_3y + c_3z &amp; = {\ цвет {красный} D_3} \ конец {матрица} \ правом. $</big> </p><p> который в матричном формате </p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {red} d_1} \\ {\ color {red} d_2} \\ {\ color {red} d_3} \ end {bmatrix}. $</big> </p><p> Тогда значения $ x, y $ и $ z $ можно найти следующим образом: </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1} &amp; b_1 &amp; c_1 \\ {\ color {red} d_2} &amp; b_2 &amp; c_2 \\ {\ color {red} d_3} &amp; b_3 &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ quad y = \ frac {\ begin {vmatrix} } a_1 &amp; {\ color {red} d_1} &amp; c_1 \\ a_2 &amp; {\ color {red} d_2} &amp; c_2 \\ a_3 &amp; {\ color {red} d_3} &amp; c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}, \ text {и} z = \ frac {\ begin {vmatrix} a_1 &amp; b_1 &amp; {\ color {red} d_1} \\ a_2 &amp; b_2 &amp; {\ color {red} d_2} \\ a_3 &amp; b_3 &amp; {\ color {red} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1 &amp; b_1 &amp; c_1 \\ a_2 &amp; b_2 &amp; c_2 \\ a_3 &amp; b_3 &amp; c_3 \ end {vmatrix}}. $</big> </p> задача <p> Учитывая следующую систему уравнений: </p><p> <big>$ \ begin {cases} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {cases} $</big> </p><p> решаем для <big>$ w $, $ x $, $ y $</big> и <big>$ z $</big> , используя правило Крамера. </p>
</section>

## Instructions
<section id='instructions'>
Given the following system of equations:
<big>
  $\begin{cases}
  2w-x+5y+z=-3 \\
  3w+2x+2y-6z=-32 \\
  w+3x+3y-z=-47 \\
  5w-2x-3y+3z=49 \\
  \end{cases}$
</big>
solve for <big>$w$, $x$, $y$</big> and <big>$z$</big>, using Cramer's rule.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cramersRule</code> is a function.
    testString: assert(typeof cramersRule === 'function');
  - text: <code>cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])</code> should return <code>[2, -12, -4, 1]</code>.
    testString: assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0]);
  - text: <code>cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])</code> should return <code>[1, 1, -1]</code>.
    testString: assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cramersRule(matrix, freeTerms) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const matrices = [
  [
    [2, -1, 5, 1],
    [3, 2, 2, -6],
    [1, 3, 3, -1],
    [5, -2, -3, 3]
  ],
  [
    [3, 1, 1],
    [2, 2, 5],
    [1, -3, -4]
  ]
];
const freeTerms = [[-3, -32, -47, 49], [3, -1, 2]];

const answers = [[2, -12, -4, 1], [1, 1, -1]];

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
