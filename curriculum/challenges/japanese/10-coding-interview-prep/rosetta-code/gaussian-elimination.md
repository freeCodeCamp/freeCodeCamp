---
id: 5a23c84252665b21eecc7e77
title: ガウスの消去法
challengeType: 1
forumTopicId: 302272
dashedName: gaussian-elimination
---

# --description--

ガウスの消去法を用い、後退代入で\\(Ax = b\\) を解く関数を記述します。

\\(A\\) は \\(n \\times n\\) 行列とします。 また、\\(x\\) と \\(b\\) は \\(n\\) に 1ベクトルを掛けます。

精度を向上させるために、部分ピボット選択とスケーリングを使用してください。

# --hints--

`gaussianElimination` は関数とします。

```js
assert(typeof gaussianElimination == 'function');
```

`gaussianElimination([[1,1],[1,-1]], [5,1])`は、配列を返す必要があります。

```js
assert(
  Array.isArray(
    gaussianElimination(
      [
        [1, 1],
        [1, -1]
      ],
      [5, 1]
    )
  )
);
```

`gaussianElimination([[1,1],[1,-1]], [5,1])` は、`[ 3, 2 ]`を返す必要があります。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 1],
      [1, -1]
    ],
    [5, 1]
  ),
  [3, 2]
);
```

`gaussianElimination([[2,3],[2,1]] , [8,4])` は、`[ 1, 2 ]`を返す必要があります。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [2, 3],
      [2, 1]
    ],
    [8, 4]
  ),
  [1, 2]
);
```

`gaussianElimination([[1,3],[5,-2]], [14,19])` は `[ 5, 3 ]`を返す必要があります。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 3],
      [5, -2]
    ],
    [14, 19]
  ),
  [5, 3]
);
```

`gaussianElimination([[1,1],[5,-1]] , [10,14])` は`[ 4, 6 ]`を返す必要があります。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 1],
      [5, -1]
    ],
    [10, 14]
  ),
  [4, 6]
);
```

`gaussianElimination([[1,2,3],[4,5,6],[7,8,8]] , [6,15,23])` は、`[ 1, 1, 1 ]`を返す必要があります。

```js
assert.deepEqual(
  gaussianElimination(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 8]
    ],
    [6, 15, 23]
  ),
  [1, 1, 1]
);
```

# --seed--

## --seed-contents--

```js
function gaussianElimination(A,b) {

}
```

# --solutions--

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
