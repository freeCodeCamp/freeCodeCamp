---
id: 594810f028c0303b75339ad8
title: Matriz de zigue-zague
challengeType: 1
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

Uma matriz 'zig-zag' é um arranjo quadrado dos primeiros $N^2$ inteiros, onde os números crescem sequencialmente à medida que você percorre em zigue-zague ao longo das antidiagonais da matriz.

Por exemplo, para a entrada `5`, o seguinte resultado deve ser produzido:

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

Escreva uma função que receba o tamanho da matriz em zigue-zague, e retorne a matriz correspondente como matriz bidimensional.

# --hints--

ZigZagMatrix deve ser uma função.

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

ZigZagMatrix deve retornar matriz.

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

ZigZagMatrix deve retornar uma matriz de matrizes aninhadas.

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

ZigZagMatrix(1) deve retornar \[[0]].

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

ZigZagMatrix(2) deve retornar \[[0, 1], [2, 3]].

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

ZigZagMatrix(5) deve retornar a matriz especificada.

```js
assert.deepEqual(ZigZagMatrix(5), zm5);
```

# --seed--

## --after-user-code--

```js
const zm1 = [[0]];
const zm2 = [[0, 1], [2, 3]];
const zm5 = [
  [0, 1, 5, 6, 14],
  [2, 4, 7, 13, 15],
  [3, 8, 12, 16, 21],
  [9, 11, 17, 20, 22],
  [10, 18, 19, 23, 24]
];
```

## --seed-contents--

```js
function ZigZagMatrix(n) {

  return [[], []];
}
```

# --solutions--

```js
function ZigZagMatrix(n) {
  const mtx = [];
  for (let i = 0; i < n; i++) {
    mtx[i] = [];
  }

  let i = 1;
  let j = 1;
  for (let e = 0; e < n * n; e++) {
    mtx[i - 1][j - 1] = e;
    if ((i + j) % 2 === 0) {
      // Even stripes
      if (j < n) j++;
      else i += 2;
      if (i > 1) i--;
    } else {
      // Odd stripes
      if (i < n) i++;
      else j += 2;
      if (j > 1) j--;
    }
  }
  return mtx;
}
```
