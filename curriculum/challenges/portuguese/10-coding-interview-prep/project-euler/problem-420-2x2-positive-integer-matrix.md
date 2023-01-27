---
id: 5900f5111000cf542c510023
title: 'Problema 420: Matriz de números inteiros positivos 2x2'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

Uma matriz de números inteiros positivos é uma matriz cujos elementos são todos números inteiros positivos.

Algumas matrizes de números inteiros positivos podem ser expressas como um quadrado de uma matriz de números inteiros positivos de duas formas diferentes. Exemplo:

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

Definimos $F(N)$ como a quantidade de matrizes de números inteiros positivos 2x2 que têm um traço inferior a N e que podem ser expressas como um quadrado de uma matriz de números inteiros positivos de duas formas diferentes.

Podemos verificar que $F(50) = 7$ e $F(1000) = 1019$.

Encontre $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` deve retornar `145159332`.

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
