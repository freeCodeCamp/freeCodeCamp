---
id: 594810f028c0303b75339ad8
title: ジグザグ行列
challengeType: 1
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

A 'zig-zag' array is a square arrangement of the first $N^2$ integers, where the numbers increase sequentially as you zig-zag along the array's anti-diagonals.

例えば、入力 `5`の場合、次の結果となります。

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

ジグザグ行列のサイズをとる関数を記述し、対応する行列を二次元配列として返します。

# --hints--

ZigZagMatrix は関数とします。

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

ZigZagMatrix は配列を返す必要があります。

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

ZigZagMatrix はネストされた配列の配列を返す必要があります。

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

ZigZagMatrix(1) は \[[0]] を返す必要があります。

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

ZigZagMatrix(2) は \[[0, 1], [2, 3]] を返す必要があります。

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

ZigZagMatrix(5) は (上記で) 指定した行列を返す必要があります。

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
