---
title: Gaussian elimination
id: 5a23c84252665b21eecc7e77
challengeType: 5
forumTopicId: 302272
localeTitle: Гауссово исключение
---

## Description
<section id='description'>
Напишите функцию для решения \ (Ax = b \), используя гауссово исключение, затем обратную замену. \ (A \) является матрицей \ (n \ times n \). Кроме того, \ (x \) и \ (b \) являются \ (n \) на 1 векторы. Чтобы повысить точность, используйте частичный поворот и масштабирование.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gaussianElimination</code> should be a function.
    testString: assert(typeof gaussianElimination=='function');
  - text: <code>gaussianElimination([[1,1],[1,-1]], [5,1])</code> should return an array.
    testString: assert(Array.isArray(gaussianElimination([[1,1],[1,-1]], [5,1])));
  - text: <code>gaussianElimination([[1,1],[1,-1]], [5,1])</code> should return <code>[ 3, 2 ]</code>.
    testString: assert.deepEqual(gaussianElimination([[1,1],[1,-1]], [5,1]), [ 3, 2 ]);
  - text: <code>gaussianElimination([[2,3],[2,1]] , [8,4])</code> should return <code>[ 1, 2 ]</code>.
    testString: assert.deepEqual(gaussianElimination([[2,3],[2,1]] , [8,4]), [ 1, 2 ]);
  - text: <code>gaussianElimination([[1,3],[5,-2]], [14,19])</code> should return <code>[ 5, 3 ]</code>.
    testString: assert.deepEqual(gaussianElimination([[1,3],[5,-2]], [14,19]), [ 5, 3 ]);
  - text: <code>gaussianElimination([[1,1],[5,-1]] , [10,14])</code> should return <code>[ 4, 6 ]</code>.
    testString: assert.deepEqual(gaussianElimination([[1,1],[5,-1]] , [10,14]), [ 4, 6 ]);
  - text: <code>gaussianElimination([[1,2,3],[4,5,6],[7,8,8]] , [6,15,23])</code> should return <code>[ 1, 1, 1 ]</code>.
    testString: assert.deepEqual(gaussianElimination([[1,2,3],[4,5,6],[7,8,8]] , [6,15,23]), [ 1, 1, 1 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gaussianElimination(A,b) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function gaussianElimination(A, b) {
  // Lower Upper Decomposition
  function ludcmp(A) {
    // A is a matrix that we want to decompose into Lower and Upper matrices.
    var d = true
    var n = A.length
    var idx = new Array(n) // Output vector with row permutations from partial pivoting
    var vv = new Array(n) // Scaling information

    for (var i=0; i<n; i++) {
        var max = 0
        for (var j=0; j<n; j++) {
            var temp = Math.abs(A[i][j])
            if (temp > max) max = temp
        }
        if (max == 0) return // Singular Matrix!
        vv[i] = 1 / max // Scaling
    }

        var Acpy = new Array(n)
        for (var i=0; i<n; i++) {
            var Ai = A[i]
            let Acpyi = new Array(Ai.length)
            for (j=0; j<Ai.length; j+=1) Acpyi[j] = Ai[j]
            Acpy[i] = Acpyi
        }
        A = Acpy

    var tiny = 1e-20 // in case pivot element is zero
    for (var i=0; ; i++) {
        for (var j=0; j<i; j++) {
            var sum = A[j][i]
            for (var k=0; k<j; k++) sum -= A[j][k] * A[k][i];
            A[j][i] = sum
        }
        var jmax = 0
        var max = 0;
        for (var j=i; j<n; j++) {
            var sum = A[j][i]
            for (var k=0; k<i; k++) sum -= A[j][k] * A[k][i];
            A[j][i] = sum
            var temp = vv[j] * Math.abs(sum)
            if (temp >= max) {
                max = temp
                jmax = j
            }
        }
        if (i <= jmax) {
            for (var j=0; j<n; j++) {
                var temp = A[jmax][j]
                A[jmax][j] = A[i][j]
                A[i][j] = temp
            }
            d = !d;
            vv[jmax] = vv[i]
        }
        idx[i] = jmax;
        if (i == n-1) break;
        var temp = A[i][i]
        if (temp == 0) A[i][i] = temp = tiny
        temp = 1 / temp
        for (var j=i+1; j<n; j++) A[j][i] *= temp
    }
    return {A:A, idx:idx, d:d}
  }

  // Lower Upper Back Substitution
  function lubksb(lu, b) {
    // solves the set of n linear equations A*x = b.
    // lu is the object containing A, idx and d as determined by the routine ludcmp.
    var A = lu.A
    var idx = lu.idx
    var n = idx.length

        var bcpy = new Array(n)
        for (var i=0; i<b.length; i+=1) bcpy[i] = b[i]
        b = bcpy

    for (var ii=-1, i=0; i<n; i++) {
        var ix = idx[i]
        var sum = b[ix]
        b[ix] = b[i]
        if (ii > -1)
            for (var j=ii; j<i; j++) sum -= A[i][j] * b[j]
        else if (sum)
            ii = i
        b[i] = sum
    }
    for (var i=n-1; i>=0; i--) {
        var sum = b[i]
        for (var j=i+1; j<n; j++) sum -= A[i][j] * b[j]
        b[i] = sum / A[i][i]
    }
    return b // solution vector x
  }

    var lu = ludcmp(A)
    if (lu === undefined) return // Singular Matrix!
    return lubksb(lu, b)
}
```

</section>
