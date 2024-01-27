---
id: 594810f028c0303b75339ad8
title: Zick-Zack-Matrix
challengeType: 1
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

A 'zig-zag' array is a square arrangement of the first $N^2$ integers, where the numbers increase sequentially as you zig-zag along the array's anti-diagonals.

Für die Eingabe `5` sollte zum Beispiel das folgende Ergebnis erzeugt werden:

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

Schreibe eine Funktion, die die Größe der Zick-Zack-Matrix annimmt und die entsprechende Matrix als zweidimensionales Array zurückgibt.

# --hints--

Zick-Zack-Matrix sollte eine Funktion sein.

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

Zick-Zack-Matrix sollte Array zurückgeben.

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

Zick-Zack-Matrix sollte ein Array an eingebetteten Arrays zurückgeben.

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

Zick-Zack-Matrix(1) sollte \[[0]] zurückgeben.

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

Zick-Zack-Matrix(2) sollte \[[0, 1], [2, 3]] zurückgeben.

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

Zick-Zack-Matrix sollte eine vorgegebene Matrix zurückgeben.

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
