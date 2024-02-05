---
id: 5900f5111000cf542c510023
title: 'Problema 420: matriz de enteros positivos de 2x2'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

A positive integer matrix is a matrix whose elements are all positive integers.

Algunas matrices de enteros positivos pueden ser expresadas como una matriz de cuadrados de dos diferentes maneras. Aquí hay un ejemplo:

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

Definimos $F(N)$ como el número de matrices enteras positivas de 2x2 cuales tienen una traza menor que N y que pueden expresarse como un cuadrado de una matriz de entera positivaen dos diferentes formas.

Podemos verificar que $F(50) = 7$ y $F(1000) = 1019$.

Encuentra $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` debería devolver `145159332`.

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
