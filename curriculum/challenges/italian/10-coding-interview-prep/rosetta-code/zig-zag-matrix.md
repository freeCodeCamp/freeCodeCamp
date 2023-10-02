---
id: 594810f028c0303b75339ad8
title: Matrice a zig-zag
challengeType: 1
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

Un array a zig zag è un arrangiamento quadrato dei primi $N^2$ numeri interi, dove i numeri crescono sequenzialmente a zig-zag lungo l'anti diagonale dell'array.

Per esempio, se come input viene fornito `5`, questo dovrebbe essere il risultato prodotto:

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

Scrivi una funzione che prendere la dimensione della matrice a zig-zag, e ritorna la matrice corrispondente come un array a 2 dimensioni.

# --hints--

ZigZagMatrix dovrebbe essere una funzione.

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

ZigZagMatrix deve restituire array.

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

ZigZagMatrix dovrebbe restituire un array di array annidati.

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

ZigZagMatrix(1) dovrebbe restituire \[[0]].

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

ZigZagMatrix(2) dovrebbe restituire \[[0, 1], [2, 3]].

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

ZigZagMatrix(5) deve restituire la matrice specificata.

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
