---
id: 5e6decd8ec8d7db960950d1c
title: LU 分解
challengeType: 1
forumTopicId: 385280
dashedName: lu-decomposition
---

# --description--

Every square matrix $A$ can be decomposed into a product of a lower triangular matrix $L$ and a upper triangular matrix $U$. This is known as the LU decomposition.

$A = LU$

它是高斯消元的一種改進形式。

Cholesky 分解僅適用於對稱正定矩陣，而更通用的 LU 分解適用於任何方陣。

有幾種計算 $L$ 和 $U$ 的算法。

要爲 3x3 示例導出 *Crout 算法*，我們必須解決以下系統：

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix}= \\begin{pmatrix} l\_{11} & 0 & 0 \\\\ l\_{21} & l\_{22} & 0 \\\\ l\_{31} & l\_{32} & l\_{33}\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = LU\\end{align}

我們現在必須解 9 個有 12 個未知數的方程。 爲了使系統唯一可解，通常將 $L$ 的對角線元素設置爲1

$l\_{11}=1$

$l\_{22}=1$

$l\_{33}=1$

所以我們得到了一個由 9 個未知數和 9 個方程組成的可解系統。

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ l\_{21} & 1 & 0 \\\\ l\_{31} & l\_{32} & 1\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ u\_{11}l\_{21} & u\_{12}l\_{21}+u\_{22} & u\_{13}l\_{21}+u\_{23} \\\\ u\_{11}l\_{31} & u\_{12}l\_{31}+u\_{22}l\_{32} & u\_{13}l\_{31} + u\_{23}l\_{32}+u\_{33} \\end{pmatrix} = LU\\end{align}

求解其他 $l$ 和 $u$，我們得到以下等式：

$u\_{11}=a\_{11}$

$u\_{12}=a\_{12}$

$u\_{13}=a\_{13}$

$u\_{22}=a\_{22} - u\_{12}l\_{21}$

$u\_{23}=a\_{23} - u\_{13}l\_{21}$

$u\_{33}=a\_{33} - (u\_{13}l\_{31} + u\_{23}l\_{32})$

對於 $l$：

$l\_{21}=\\frac{1}{u\_{11}} a\_{21}$

$l\_{31}=\\frac{1}{u\_{11}} a\_{31}$

$l\_{32}=\\frac{1}{u\_{22}} (a\_{32} - u\_{12}l\_{31})$

我們看到有一個計算模式，可以用下面的公式表示，首先對於 $U$

$u\_{ij} = a\_{ij} - \\sum\_{k=1}^{i-1} u\_{kj}l\_{ik}$

然後爲 $L$

$l\_{ij} = \\frac{1}{u\_{jj}} (a\_{ij} - \\sum\_{k=1}^{j-1} u\_{kj}l\_{ik})$

我們在第二個公式中看到，要得到對角線以下的 $l\_{ij}$，我們必須除以對角線元素（樞軸）$u\_{jj}$，所以當 $u\ _{jj}$ 要麼爲 0，要麼非常小，這會導致數值不穩定。

這個問題的解決方案是*旋轉* $A$，這意味着在 $LU$ 分解之前重新排列 $A$ 的行，使最大元素每列的對角線上的 $A$。 重新排列行意味着將 $A$ 乘以置換矩陣 $P$：

$PA \\Rightarrow A'$

Example:

\\begin{align} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix} \\Rightarrow \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\end{align}

然後將分解算法應用於重新排列的矩陣，以便

$PA = LU$

# --instructions--

The task is to implement a routine which will take a square nxn matrix $A$ and return a lower triangular matrix $L$, a upper triangular matrix $U$ and a permutation matrix $P$, so that the above equation is fulfilled. 返回值的格式應爲 `[L, U, P]`。

# --hints--

`luDecomposition` 應該是一個函數。

```js
assert(typeof luDecomposition == 'function');
```

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` 應該返回一個數組。

```js
assert(
  Array.isArray(
    luDecomposition([
      [1, 3, 5],
      [2, 4, 7],
      [1, 1, 0]
    ])
  )
);
```

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` 應該返回 `[[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]`。

```js
assert.deepEqual(
  luDecomposition([
    [1, 3, 5],
    [2, 4, 7],
    [1, 1, 0]
  ]),
  [
    [
      [1, 0, 0],
      [0.5, 1, 0],
      [0.5, -1, 1]
    ],
    [
      [2, 4, 7],
      [0, 1, 1.5],
      [0, 0, -2]
    ],
    [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1]
    ]
  ]
);
```

`luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]])` 應該返回 `[[[1, 0, 0, 0], [0.2727272727272727, 1, 0, 0], [0.09090909090909091, 0.2875, 1, 0], [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546], [0, 0, -3.4749999999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]]`。

```js
assert.deepEqual(
  luDecomposition([
    [11, 9, 24, 2],
    [1, 5, 2, 6],
    [3, 17, 18, 1],
    [2, 5, 7, 1]
  ]),
  [
    [
      [1, 0, 0, 0],
      [0.2727272727272727, 1, 0, 0],
      [0.09090909090909091, 0.2875, 1, 0],
      [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]
    ],
    [
      [11, 9, 24, 2],
      [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546],
      [0, 0, -3.4749999999999996, 5.6875],
      [0, 0, 0, 0.510791366906476]
    ],
    [
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1]
    ]
  ]
);
```

`luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]])` 應該返回 `[[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`。

```js
assert.deepEqual(
  luDecomposition([
    [1, 1, 1],
    [4, 3, -1],
    [3, 5, 3]
  ]),
  [
    [
      [1, 0, 0],
      [0.75, 1, 0],
      [0.25, 0.09090909090909091, 1]
    ],
    [
      [4, 3, -1],
      [0, 2.75, 3.75],
      [0, 0, 0.9090909090909091]
    ],
    [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0]
    ]
  ]
);
```

`luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]])` 應該返回 `[[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`。

```js
assert.deepEqual(
  luDecomposition([
    [1, -2, 3],
    [2, -5, 12],
    [0, 2, -10]
  ]),
  [
    [
      [1, 0, 0],
      [0, 1, 0],
      [0.5, 0.25, 1]
    ],
    [
      [2, -5, 12],
      [0, 2, -10],
      [0, 0, -0.5]
    ],
    [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0]
    ]
  ]
);
```

# --seed--

## --seed-contents--

```js
function luDecomposition(A) {

}
```

# --solutions--

```js
function luDecomposition(A) {

    function dotProduct(a, b) {
        var sum = 0;
        for (var i = 0; i < a.length; i++)
            sum += a[i] * b[i]
        return sum;
    }

    function matrixMul(A, B) {
        var result = new Array(A.length);
        for (var i = 0; i < A.length; i++)
            result[i] = new Array(B[0].length)
        var aux = new Array(B.length);

        for (var j = 0; j < B[0].length; j++) {

            for (var k = 0; k < B.length; k++)
                aux[k] = B[k][j];

            for (var i = 0; i < A.length; i++)
                result[i][j] = dotProduct(A[i], aux);
        }
        return result;
    }

    function pivotize(m) {
        var n = m.length;
        var id = new Array(n);
        for (var i = 0; i < n; i++) {
            id[i] = new Array(n);
            id[i].fill(0)
            id[i][i] = 1;
        }

        for (var i = 0; i < n; i++) {
            var maxm = m[i][i];
            var row = i;
            for (var j = i; j < n; j++)
                if (m[j][i] > maxm) {
                    maxm = m[j][i];
                    row = j;
                }

            if (i != row) {
                var tmp = id[i];
                id[i] = id[row];
                id[row] = tmp;
            }
        }
        return id;
    }

    var n = A.length;
    var L = new Array(n);
    for (var i = 0; i < n; i++) { L[i] = new Array(n); L[i].fill(0) }
    var U = new Array(n);
    for (var i = 0; i < n; i++) { U[i] = new Array(n); U[i].fill(0) }
    var P = pivotize(A);
    var A2 = matrixMul(P, A);

    for (var j = 0; j < n; j++) {
        L[j][j] = 1;
        for (var i = 0; i < j + 1; i++) {
            var s1 = 0;
            for (var k = 0; k < i; k++)
                s1 += U[k][j] * L[i][k];
            U[i][j] = A2[i][j] - s1;
        }
        for (var i = j; i < n; i++) {
            var s2 = 0;
            for (var k = 0; k < j; k++)
                s2 += U[k][j] * L[i][k];
            L[i][j] = (A2[i][j] - s2) / U[j][j];
        }
    }
    return [L, U, P];
}
```
