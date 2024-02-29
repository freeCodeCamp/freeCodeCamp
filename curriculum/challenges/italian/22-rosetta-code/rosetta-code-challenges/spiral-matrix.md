---
id: 5a23c84252665b21eecc801c
title: Matrice a spirale
challengeType: 1
forumTopicId: 302321
dashedName: spiral-matrix
---

# --description--

Produce a spiral array. A *spiral array* is a square arrangement of the first N<sup>2</sup> natural numbers, where the numbers increase sequentially as you go around the edges of the array spiraling inwards. For example, given **5**, produce this array:

<pre>
0  1  2  3  4
15 16 17 18 5
14 23 24 19 6
13 22 21 20 7
12 11 10  9 8
</pre>

# --hints--

`spiralArray` dovrebbe essere una funzione.

```js
assert(typeof spiralArray == 'function');
```

`spiralArray(3)` dovrebbe restituire un array.

```js
assert(Array.isArray(spiralArray(3)));
```

`spiralArray(3)` dovrebbe restituire `[[0, 1, 2],[7, 8, 3],[6, 5, 4]]`.

```js
assert.deepEqual(spiralArray(3), [
  [0, 1, 2],
  [7, 8, 3],
  [6, 5, 4]
]);
```

`spiralArray(4)` dovrebbe restituire `[[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]]`.

```js
assert.deepEqual(spiralArray(4), [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6]
]);
```

`spiralArray(5)` dovrebbe restituire `[[0, 1, 2, 3, 4],[15, 16, 17, 18, 5],[14, 23, 24, 19, 6],[13, 22, 21, 20, 7],[12, 11, 10, 9, 8]]`.

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
