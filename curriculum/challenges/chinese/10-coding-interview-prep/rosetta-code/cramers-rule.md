---
id: 59713da0a428c1a62d7db430
title: 克莱姆法则
challengeType: 1
forumTopicId: 302239
dashedName: cramers-rule
---

# --description--

<a href="https://rosettacode.org/wiki/Cramer%27s_rule" target="_blank" rel="noopener noreferrer nofollow">Cramer's rule</a> is a formula for solving a system of linear equations by using the determinants of matrices formed from subsets of the coefficients and right hand side values.

The determinant of a matrix with 2 rows and two columns is given by:

$\begin{aligned}|A|={\begin{vmatrix}a&b\\\c&d\end{vmatrix}}=ad-bc.\end{aligned}$

Given a system of linear equations:

$\\left\\{\\begin{matrix}a_1x + b_1y + c_1z&= {\\color{red}d_1}\\\\a_2x + b_2y + c_2z&= {\\color{red}d_2}\\\\a_3x + b_3y + c_3z&= {\\color{red}d_3}\\end{matrix}\\right.$

which in matrix format is

$\\begin{bmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix}=\\begin{bmatrix} {\\color{red}d_1} \\\\ {\\color{red}d_2} \\\\ {\\color{red}d_3} \\end{bmatrix}.$

Then the values of $x, y$ and $z$ can be found as follows:

$x = \\frac{\\begin{vmatrix} {\\color{red}d_1} & b_1 & c_1 \\\\ {\\color{red}d_2} & b_2 & c_2 \\\\ {\\color{red}d_3} & b_3 & c_3 \\end{vmatrix} } { \\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix}}, \\quad y = \\frac {\\begin{vmatrix} a_1 & {\\color{red}d_1} & c_1 \\\\ a_2 & {\\color{red}d_2} & c_2 \\\\ a_3 & {\\color{red}d_3} & c_3 \\end{vmatrix}} {\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix}}, \\text{ and }z = \\frac { \\begin{vmatrix} a_1 & b_1 & {\\color{red}d_1} \\\\ a_2 & b_2 & {\\color{red}d_2} \\\\ a_3 & b_3 & {\\color{red}d_3} \\end{vmatrix}} {\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} }.$

# --instructions--

Given the following system of equations:

$\\begin{cases} 2w-x+5y+z=-3 \\\\ 3w+2x+2y-6z=-32 \\\\ w+3x+3y-z=-47 \\\\ 5w-2x-3y+3z=49 \\\\ \\end{cases}$

solve for $w$, $x$, $y$ and $z$, using Cramer's rule.

# --hints--

`cramersRule` should be a function.

```js
assert(typeof cramersRule === 'function');
```

`cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])` should return `[2, -12, -4, 1]`.

```js
assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0]);
```

`cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])` should return `[1, 1, -1]`.

```js
assert.deepEqual(cramersRule(matrices[1], freeTerms[1]), answers[1]);
```

# --seed--

## --after-user-code--

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

## --seed-contents--

```js
function cramersRule(matrix, freeTerms) {

  return true;
}
```

# --solutions--

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
