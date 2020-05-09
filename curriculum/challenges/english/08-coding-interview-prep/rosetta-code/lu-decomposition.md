---
id: 5e6decd8ec8d7db960950d1c
title: LU decomposition
challengeType: 5
forumTopicId: 385280
---

## Description
<section id='description'>
Every square matrix $A$ can be decomposed into a product of a lower triangular matrix $L$ and a upper triangular matrix $U$, as described in <a href="https://en.wikipedia.org/wiki/LU decomposition">LU decomposition</a>.
$A = LU$
It is a modified form of Gaussian elimination.
While the <a href="http://rosettacode.org/wiki/Cholesky decomposition">Cholesky decomposition</a> only works for symmetric, positive definite matrices, the more general LU decomposition works for any square matrix.
There are several algorithms for calculating $L$ and $U$.
To derive <i>Crout's algorithm</i> for a 3x3 example, we have to solve the following system:
\begin{align}A = \begin{pmatrix} a_{11} & a_{12} & a_{13}\\ a_{21} & a_{22} & a_{23}\\ a_{31} & a_{32} & a_{33}\\ \end{pmatrix}= \begin{pmatrix} l_{11} & 0 & 0 \\ l_{21} & l_{22} & 0 \\ l_{31} & l_{32} & l_{33}\\ \end{pmatrix} \begin{pmatrix} u_{11} & u_{12} & u_{13} \\ 0 & u_{22} & u_{23} \\ 0 & 0 & u_{33} \end{pmatrix} = LU\end{align}
We now would have to solve 9 equations with 12 unknowns. To make the system uniquely solvable, usually the diagonal elements of $L$ are set to 1
$l_{11}=1$
$l_{22}=1$
$l_{33}=1$
so we get a solvable system of 9 unknowns and 9 equations.
\begin{align}A = \begin{pmatrix} a_{11} & a_{12} & a_{13}\\ a_{21} & a_{22} & a_{23}\\ a_{31} & a_{32} & a_{33}\\ \end{pmatrix} = \begin{pmatrix} 1      & 0      & 0 \\ l_{21} & 1      & 0 \\ l_{31} & l_{32} & 1\\ \end{pmatrix} \begin{pmatrix} u_{11} & u_{12} & u_{13} \\ 0 & u_{22} & u_{23} \\ 0 & 0 & u_{33} \end{pmatrix} = \begin{pmatrix} u_{11}        & u_{12}                    & u_{13}              \\ u_{11}l_{21}  & u_{12}l_{21}+u_{22}       & u_{13}l_{21}+u_{23} \\ u_{11}l_{31}  & u_{12}l_{31}+u_{22}l_{32} & u_{13}l_{31} + u_{23}l_{32}+u_{33} \end{pmatrix} = LU\end{align}
Solving for the other $l$ and $u$, we get the following equations:
$u_{11}=a_{11}$
$u_{12}=a_{12}$
$u_{13}=a_{13}$
$u_{22}=a_{22} - u_{12}l_{21}$
$u_{23}=a_{23} - u_{13}l_{21}$
$u_{33}=a_{33} - (u_{13}l_{31} + u_{23}l_{32})$
and for $l$:
$l_{21}=\frac{1}{u_{11}} a_{21}$
$l_{31}=\frac{1}{u_{11}} a_{31}$
$l_{32}=\frac{1}{u_{22}} (a_{32} - u_{12}l_{31})$
We see that there is a calculation pattern, which can be expressed as the following formulas, first for $U$
$u_{ij} = a_{ij} - \sum_{k=1}^{i-1} u_{kj}l_{ik}$
and then for $L$
$l_{ij} = \frac{1}{u_{jj}} (a_{ij} - \sum_{k=1}^{j-1} u_{kj}l_{ik})$
We see in the second formula that to get the $l_{ij}$ below the diagonal, we have to divide by the diagonal element (pivot) $u_{jj}$, so we get problems when $u_{jj}$ is either 0 or very small, which leads to numerical instability.
The solution to this problem is <i>pivoting</i> $A$, which means rearranging the rows of $A$, prior to the $LU$ decomposition, in a way that the largest element of each column gets onto the diagonal of $A$. Rearranging the rows means to multiply $A$ by a permutation matrix $P$:
$PA \Rightarrow A'$
Example:
\begin{align} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 4 \\ 2 & 3 \end{pmatrix} \Rightarrow \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix} \end{align}
The decomposition algorithm is then applied on the rearranged matrix so that
$PA = LU$
</section>

## Instructions
<section id='instructions'>
The task is to implement a routine which will take a square nxn matrix $A$ and return a lower triangular matrix $L$, a upper triangular matrix $U$ and a permutation matrix $P$, so that the above equation is fullfilled. The returned value should be in the form <code>[L, U, P]</code>.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>luDecomposition</code> should be a function.
    testString: assert(typeof luDecomposition == 'function');
  - text: <code>luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])</code> should return a array.
    testString: assert(Array.isArray(luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])));
  - text: <code>luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]])</code> should return <code>[[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]</code>.
    testString: assert.deepEqual(luDecomposition([[1, 3, 5], [2, 4, 7], [1, 1, 0]]), [[[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]], [[2, 4, 7], [0, 1, 1.5], [0, 0, -2]], [[0, 1, 0], [1, 0, 0], [0, 0, 1]]]);
  - text: <code>luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]])</code> should return <code>[[[1, 0, 0, 0], [0.2727272727272727, 1, 0, 0], [0.09090909090909091, 0.2875, 1, 0], [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546], [0, 0, -3.4749999999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]]</code>.
    testString: assert.deepEqual(luDecomposition([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]]), [[[1, 0, 0, 0], [0.2727272727272727, 1, 0, 0], [0.09090909090909091, 0.2875, 1, 0], [0.18181818181818182, 0.23124999999999996, 0.0035971223021580693, 1]], [[11, 9, 24, 2], [0, 14.545454545454547, 11.454545454545455, 0.4545454545454546], [0, 0, -3.4749999999999996, 5.6875], [0, 0, 0, 0.510791366906476]], [[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]]);
  - text: <code>luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]])</code> should return <code>[[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]</code>.
    testString: assert.deepEqual(luDecomposition([[1, 1, 1], [4, 3, -1], [3, 5, 3]]), [[[1, 0, 0], [0.75, 1, 0], [0.25, 0.09090909090909091, 1]], [[4, 3, -1], [0, 2.75, 3.75], [0, 0, 0.9090909090909091]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]);
  - text: <code>luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]])</code> should return <code>[[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]</code>.
    testString: assert.deepEqual(luDecomposition([[1, -2, 3], [2, -5, 12], [0, 2, -10]]), [[[1, 0, 0], [0, 1, 0], [0.5, 0.25, 1]], [[2, -5, 12], [0, 2, -10], [0, 0, -0.5]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]]);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function luDecomposition(A) {

}
```

</div>

</section>

## Solution
<section id='solution'>

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

</section>
