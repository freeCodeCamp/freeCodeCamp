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

これはガウスの消去法の修正版です。

While the Cholesky decomposition only works for symmetric, positive definite matrices, the more general LU decomposition works for any square matrix.

$L$ と $U$ を計算するためのアルゴリズムはいくつかあります。

3x3 の例について *クラウト法* を導き出すには、次の系を解く必要があります。

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix}= \\begin{pmatrix} l\_{11} & 0 & 0 \\\\ l\_{21} & l\_{22} & 0 \\\\ l\_{31} & l\_{32} & l\_{33}\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = LU\\end{align}

次に、未知数 12 個を持つ 9つの方程式を解かなければなりません。 系を一意に解決できるようにするために、通常 $L$ の対角要素を 1 に設定します。

$l\_{11}=1$

$l\_{22}=1$

$l\_{33}=1$

これで、9 つの未知数と 9 つの方程式を解くことができます。

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ l\_{21} & 1 & 0 \\\\ l\_{31} & l\_{32} & 1\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ u\_{11}l\_{21} & u\_{12}l\_{21}+u\_{22} & u\_{13}l\_{21}+u\_{23} \\\\ u\_{11}l\_{31} & u\_{12}l\_{31}+u\_{22}l\_{32} & u\_{13}l\_{31} + u\_{23}l\_{32}+u\_{33} \\end{pmatrix} = LU\\end{align}

他の $l$ と $u$ を解くと、次の式が得られます。

$u\_{11}=a\_{11}$

$u\_{12}=a\_{12}$

$u\_{13}=a\_{13}$

$u\_{22}=a\_{22} - u\_{12}l\_{21}$

$u\_{23}=a\_{23} - u\_{13}l\_{21}$

$u\_{33}=a\_{33} - (u\_{13}l\_{31} + u\_{23}l\_{32})$

$l$ については、次のとおりです。

$l\_{21}=\\frac{1}{u\_{11}} a\_{21}$

$l\_{31}=\\frac{1}{u\_{11}} a\_{31}$

$l\_{32}=\\frac{1}{u\_{22}} (a\_{32} - u\_{12}l\_{31})$

以下の式として表現できる計算パターンがあることがわかります。まず $U$ の場合、

$u\_{ij} = a\_{ij} - \\sum\_{k=1}^{i-1} u\_{kj}l\_{ik}$

そして $L$ の場合、

$l\_{ij} = \\frac{1}{u\_{jj}} (a\_{ij} - \\sum\_{k=1}^{j-1} u\_{kj}l\_{ik})$

2 番目の式で、対角線より下の $l\_{ij}$ を取得するには、対角要素 (ピボット) $u\_{jj}$ で除算する必要があるため、$u\_{jj}$ が 0 または非常に小さい時、数値が不安定になり、問題が発生します。

この問題の解決策が、*ピボット選択* $A$ です。これは、$LU$ 分解の前に $A$ の行を再配置することを意味します。これにより、各列の最大要素が $A$の対角要素となります。 行を並べ替えることで、 $A$ に 置換行列 $P$ をかけることになります。

$PA \\Rightarrow A'$

例:

\\begin{align} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix} \\Rightarrow \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\end{align}

次に、再配置された行列に分解アルゴリズムが適用され、以下のようになります。

$PA = LU$

# --instructions--

タスクは、nxn の正方行列 $A$ を取り、下三角行列 $L$、上三角行列 $U$、および置換行列 $P$ を返すルーチンを実装して、上記の式が満たされるようにすることです。 戻り値は、 `[L, U, P]` の形式でなければなりません。

# --hints--

`luDecomposition` は関数とします。

```js
assert(typeof luDecomposition == 'function');
```

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` は配列を返す必要があります。

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

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` は `[[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]` を返す必要があります。

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

`luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]])` は `[[[1, 0, 0, 0], [0.2727272727272727, 1, 0, 0], [0.09090909090909091, 0.2875, 1, 0], [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546], [0, 0, -3.4749999999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]]` を返す必要があります。

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

`luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]])` は `[[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]` を返す必要があります。

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

`luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]])` は `[[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]` を返す必要があります。

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
