---
id: 59713da0a428c1a62d7db430
title: 克莱默的统治
challengeType: 5
videoUrl: ''
dashedName: cramers-rule
---

# --description--

<p> <a href='https://en.wikipedia.org/wiki/linear algebra' title='wp：线性代数'>在线性代数中</a> ， <a href='https://en.wikipedia.org/wiki/Cramer&#x27;s rule' title='wp：Cramer的规则'>Cramer规则</a>是一个<a href='https://en.wikipedia.org/wiki/system of linear equations' title='wp：线性方程组'>线性方程组</a>解的显式公式，其中包含与未知数一样多的方程，只要系统具有唯一解，就有效。它通过用方程右边的矢量替换一列来表示（方形）系数矩阵的决定因素和从它获得的矩阵的解决方案。 </p><p>特定</p><p><big></big></p><p> <big>$ \ left \ {\ begin {matrix} a_1x + b_1y + c_1z＆= {\ color {red} d_1} \\ a_2x + b_2y + c_2z＆= {\ color {red} d_2} \\ a_3x + b_3y + c_3z＆= {\颜色{红} D_3} \ {结束矩阵} \权。$</big> </p><p>以矩阵格式表示</p><p><big></big></p><p> <big>$ \ begin {bmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {bmatrix} \ begin {bmatrix} x \\ y \\ z \ end {bmatrix} = \ begin {bmatrix} {\ color {red} d_1} \\ {\ color {red} d_2} \\ {\ color {red} d_3} \ end {bmatrix}。$</big> </p><p>然后可以找到$ x，y $和$ z $的值，如下所示： </p><p><big></big></p><p> <big>$ x = \ frac {\ begin {vmatrix} {\ color {red} d_1}＆b_1＆c_1 \\ {\ color {red} d_2}＆b_2＆c_2 \\ {\ color {red} d_3}＆b_3＆ c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}，\ quad y = \ frac {\ begin {vmatrix } a_1＆{\ color {red} d_1}＆c_1 \\ a_2＆{\ color {red} d_2}＆c_2 \\ a_3＆{\ color {red} d_3}＆c_3 \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}，\ text {和} z = \ frac {\ begin {vmatrix} a_1＆b_1＆{\ color {red} d_1} \\ a_2＆b_2＆{\ color {red} d_2} \\ a_3＆b_3＆{\ color {red} d_3} \ end {vmatrix}} {\ begin {vmatrix} a_1＆b_1＆ c_1 \\ a_2＆b_2＆c_2 \\ a_3＆b_3＆c_3 \ end {vmatrix}}。$</big> </p>任务<p>给定以下方程组： </p><p> <big>$ \ begin {例} 2w-x + 5y + z = -3 \\ 3w + 2x + 2y-6z = -32 \\ w + 3x + 3y-z = -47 \\ 5w-2x-3y + 3z = 49 \\ \ end {cases} $</big> </p><p>使用Cramer的规则解决<big>$ w $，$ x $，$ y $</big>和<big>$ z $</big> 。 </p>

# --hints--

`cramersRule`是一个函数。

```js
assert(typeof cramersRule === 'function');
```

`cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49])`应返回`[2, -12, -4, 1]` 。

```js
assert.deepEqual(cramersRule(matrices[0], freeTerms[0]), answers[0]);
```

`cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2])`应返回`[1, 1, -1]` 。

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
