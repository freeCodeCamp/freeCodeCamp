---
id: 5e6decd8ec8d7db960950d1c
title: Decomposição de LU
challengeType: 1
forumTopicId: 385280
dashedName: lu-decomposition
---

# --description--

Toda matriz quadrada $A$ pode ser decomposta em um produto de uma matriz triangular inferior $L$ e uma matriz triangular superior $U$. Essa é conhecida como a decomposição de LU.

$A = LU$

Ela é uma forma modificada da eliminação de Gauss.

Enquanto a decomposição do Cholesky funciona somente para matrizes simétricas, definidas e positivas, a decomposição da LU é mais geral e funciona para qualquer matriz quadrada.

Existem vários algoritmos para calcular $L$ e $U$.

Para derivar o *algoritmo de Crout* para um exemplo de 3x3, temos de resolver o seguinte sistema:

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix}= \\begin{pmatrix} l\_{11} & 0 & 0 \\\\ l\_{21} & l\_{22} & 0 \\\\ l\_{31} & l\_{32} & l\_{33}\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = LU\\end{align}

Agora, teríamos de resolver 9 equações com 12 incógnitas. Para tornar o sistema resolvível de forma única, geralmente os elementos diagonais de $L$ estão definidos como 1

$l\_{11}=1$

$l\_{22}=1$

$l\_{33}=1$

portanto, obtemos um sistema resolvível de 9 incógnitas e 9 equações.

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ l\_{21} & 1 & 0 \\\\ l\_{31} & l\_{32} & 1\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ u\_{11}l\_{21} & u\_{12}l\_{21}+u\_{22} & u\_{13}l\_{21}+u\_{23} \\\\ u\_{11}l\_{31} & u\_{12}l\_{31}+u\_{22}l\_{32} & u\_{13}l\_{31} + u\_{23}l\_{32}+u\_{33} \\end{pmatrix} = LU\\end{align}

Ao solucionar para os outros $l$ e $u$, recebemos as seguintes equações:

$u\_{11}=a\_{11}$

$u\_{12}=a\_{12}$

$u\_{13}=a\_{13}$

$u\_{22}=a\_{22} - u\_{12}l\_{21}$

$u\_{23}=a\_{23} - u\_{13}l\_{21}$

$u\_{33}=a\_{33} - (u\_{13}l\_{31} + u\_{23}l\_{32})$

e para $l$:

$l\_{21}=\\frac{1}{u\_{11}} a\_{21}$

$l\_{31}=\\frac{1}{u\_{11}} a\_{31}$

$l\_{32}=\\frac{1}{u\_{22}} (a\_{32} - u\_{12}l\_{31})$

Vemos que há um padrão de cálculo, que pode ser expresso com as seguintes fórmulas, primeiro para $U$

$u\_{ij} = a\_{ij} - \\sum\_{k=1}^{i-1} u\_{kj}l\_{ik}$

e depois para $L$

$l\_{ij} = \\frac{1}{u\_{jj}} (a\_{ij} - \\sum\_{k=1}^{j-1} u\_{kj}l\_{ik})$

Vemos na segunda fórmula que, para obter o $l\_{ij}$ abaixo da diagonal, temos de dividir pelo elemento da diagonal (pivô) $u\_{jj}$, de modo que temos problemas quando $u\_{jj}$ é 0 ou muito pequeno, o que gera uma instabilidade numérica.

A solução para este problema é *rotar* $A$, o que significa reorganizar as linhas de $A$, antes da decomposição de $LU$, de modo que o maior elemento de cada coluna fique na diagonal de $A$. Reordenar as linhas significa multiplicar $A$ por uma matriz de permutação $P$:

$PA \\Rightarrow A'$

Exemplo:

\\begin{align} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix} \\Rightarrow \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\end{align}

O algoritmo de decomposição será então aplicado na matriz reorganizada para que

$PA = LU$

# --instructions--

A tarefa é implementar uma rotina que receba uma matriz quadrada $A$ nxn e retornar uma matriz triangular inferior $L$, uma matriz triangular superior $U$ e uma matriz de permutação $P$, para que a equação acima seja resolvida. O valor retornado deve estar na forma `[L, U, P]`.

# --hints--

`luDecomposition` deve ser uma função.

```js
assert(typeof luDecomposition == 'function');
```

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` deve retornar um array.

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

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` deve retornar `[[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]`.

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

`luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]])` deve retornar `[[[1, 0, 0, 0], [0.2727272727272727, 1, 0, 0], [0.09090909090909091, 0.2875, 1, 0], [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546], [0, 0, -3.4749999999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]]`.

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

`luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]])` deve retornar `[[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`.

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

`luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]])` deve retornar `[[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`.

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
