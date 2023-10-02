---
id: 5a23c84252665b21eecc801c
title: スパイラル行列
challengeType: 1
forumTopicId: 302321
dashedName: spiral-matrix
---

# --description--

スパイラル配列を作ります。 *スパイラル配列*は最初のN<sup>2</sup>個の自然数の正方形配列です。ここでは配列の端をらせん状に内側へと進むごとに数値が順に増えていきます。 例えば、 **5**を与えられた場合、以下の配列を生成します。

<pre>
0  1  2  3  4
15 16 17 18 5
14 23 24 19 6
13 22 21 20 7
12 11 10  9 8
</pre>

# --hints--

`spiralArray` は関数とします。

```js
assert(typeof spiralArray == 'function');
```

`spiralArray(3)` は配列を返す必要があります。

```js
assert(Array.isArray(spiralArray(3)));
```

`spiralArray(3)` は `[[0, 1, 2],[7, 8, 3],[6, 5, 4]]` を返す必要があります。

```js
assert.deepEqual(spiralArray(3), [
  [0, 1, 2],
  [7, 8, 3],
  [6, 5, 4]
]);
```

`spiralArray(4)` は `[[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]]` を返す必要があります。

```js
assert.deepEqual(spiralArray(4), [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6]
]);
```

`spiralArray(5)` は `[[0, 1, 2, 3, 4],[15, 16, 17, 18, 5],[14, 23, 24, 19, 6],[13, 22, 21, 20, 7],[12, 11, 10, 9, 8]]` を返す必要があります。

```js
assert.deepEqual(spiralArray(5), [
  [0, 1, 2, 3, 4],
  [15, 16, 17, 18, 5],
  [14, 23, 24, 19, 6],
  [13, 22, 21, 20, 7],
  [12, 11, 10, 9, 8]
]);
```

# --seed--

## --seed-contents--

```js
function spiralArray(n) {

}
```

# --solutions--

```js
function spiralArray(n) {
  var arr = Array(n),
    x = 0,
    y = n,
    total = n * n--,
    dx = 1,
    dy = 0,
    i = 0,
    j = 0;
  while (y) arr[--y] = [];
  while (i < total) {
    arr[y][x] = i++;
    x += dx;
    y += dy;
    if (++j == n) {
      if (dy < 0) {
        x++;
        y++;
        n -= 2;
      }
      j = dx;
      dx = -dy;
      dy = j;
      j = 0;
    }
  }
  return arr;
}
```
