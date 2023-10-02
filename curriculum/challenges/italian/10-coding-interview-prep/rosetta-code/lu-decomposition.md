---
id: 5e6decd8ec8d7db960950d1c
title: Scomposizione LU
challengeType: 1
forumTopicId: 385280
dashedName: lu-decomposition
---

# --description--

Ogni matrice quadrata $A$ può essere decomposta nel prodotto di una matrice triangolare inferiore $L$ e una matrice triangolare superiore $U$. Questo è noto come decomposizione LU.

$A = LU$

È una forma modificata di eliminazione gaussiana.

Anche se la decomposizione di Cholesky funziona solo per matrici positive definite simmetriche, la più generica decomposizione LU funziona per qualsiasi matrice quadrata.

Ci sono diversi algoritmi per calcolare $L$ e $U$.

Per ricavare l'algoritmo *di Crout* per un esempio 3x3, dobbiamo risolvere il seguente sistema:

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix}= \\begin{pmatrix} l\_{11} & 0 & 0 \\\\ l\_{21} & l\_{22} & 0 \\\\ l\_{31} & l\_{32} & l\_{33}\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = LU\\end{align}

Ora dovremmo risolvere 9 equazioni con 12 incognite. Per rendere il sistema unicamente risolvibile, di solito gli elementi diagonali di $L$ sono impostati a 1

$l\_{11}=1$

$l\_{22}=1$

$l\_{33}=1$

così otteniamo un sistema risolvibile con 9 equazioni e 9 incognite.

\\begin{align}A = \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13}\\\\ a\_{21} & a\_{22} & a\_{23}\\\\ a\_{31} & a\_{32} & a\_{33}\\\\ \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ l\_{21} & 1 & 0 \\\\ l\_{31} & l\_{32} & 1\\\\ \\end{pmatrix} \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ 0 & u\_{22} & u\_{23} \\\\ 0 & 0 & u\_{33} \\end{pmatrix} = \\begin{pmatrix} u\_{11} & u\_{12} & u\_{13} \\\\ u\_{11}l\_{21} & u\_{12}l\_{21}+u\_{22} & u\_{13}l\_{21}+u\_{23} \\\\ u\_{11}l\_{31} & u\_{12}l\_{31}+u\_{22}l\_{32} & u\_{13}l\_{31} + u\_{23}l\_{32}+u\_{33} \\end{pmatrix} = LU\\end{align}

Risolvendo gli altri $l$ e $u$, otteniamo le seguenti equazioni:

$u\_{11}=a\_{11}$

$u\_{12}=a\_{12}$

$u\_{13}=a\_{13}$

$u\_{22}=a\_{22} - u\_{12}l\_{21}$

$u\_{23}=a\_{23} - u\_{13}l\_{21}$

$u\_{33}=a\_{33} - (u\_{13}l\_{31} + u\_{23}l\_{32})$

e per $l$:

$l\_{21}=\\frac{1}{u\_{11}} a\_{21}$

$l\_{31}=\\frac{1}{u\_{11}} a\_{31}$

$l\_{32}=\\frac{1}{u\_{22}} (a\_{32} - u\_{12}l\_{31})$

Vediamo che esiste un modello di calcolo, che può essere espresso come le seguenti formule, prima per $U$

$u\_{ij} = a\_{ij} - \\sum\_{k=1}^{i-1} u\_{kj}l\_{ik}$

e poi per $L$

$l\_{ij} = \\frac{1}{u\_{jj}} (a\_{ij} - \\sum\_{k=1}^{j-1} u\_{kj}l\_{ik})$

Vediamo nella seconda formula che per ottenere $l\_{ij}$ sotto la diagonale, dobbiamo dividere per l'elemento diagonale (pivot) $u\_{jj}$, così abbiamo problemi quando $u\_{jj}$ è 0 o molto piccolo, il che porta all'instabilità numerica.

La soluzione a questo problema è il *pivoting* $A$, il che significa riordinare le righe di $A$, prima della scomposizione di $LU$, in un modo che l’elemento più grande di ogni colonna entri nella diagonale di $A$. Riorganizzare le righe significa moltiplicare $A$ per una matrice di permutazione $P$:

$PA \\Rightarrow A'$

Esempio:

\\begin{align} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix} \\Rightarrow \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} \\end{align}

L'algoritmo di scomposizione viene quindi applicato sulla matrice riarrangiata in modo che

$PA = LU$

# --instructions--

Il compito è quello di implementare una routine che richiederà una matrice quadrata nxn $A$ e restituirà una matrice triangolare inferiore $L$, una matrice triangolare superiore $U$ e una matrice di permutazione $P$, in modo che l'equazione di cui sopra sia soddisfatta. Il valore restituito dovrebbe essere nella forma `[L, U, P]`.

# --hints--

`luDecomposition` dovrebbe essere una funzione.

```js
assert(typeof luDecomposition == 'function');
```

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` dovrebbe restituire un array.

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

`luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])` dovrebbe restituire `[[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]`.

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

`luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]])` dovrebbe restituire `[[1, 0, 0, 0], [0. 7272727272727, 1, 0, 0], [0.0909090909091, 0.2875, 1, 0], [0.1818181818181818182, 0.231249999999996, 0. 035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.5454545454545447, 11.45454545454545455, 0.45454545454546], [0, 0, -3. 74999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0, 1]]`.

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

`luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]])` dovrebbe restituire `[[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`.

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

`luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]])` dovrebbe restituire `[[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]`.

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
