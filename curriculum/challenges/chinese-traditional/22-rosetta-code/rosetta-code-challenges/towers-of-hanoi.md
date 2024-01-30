---
id: 5951ed8945deab770972ae56
title: 漢諾塔
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, `["source", "destination"]`.

例如，參數 `(4, 'A', 'B', 'C')`，移動列表的嵌套數組是 `[['A', 'C'], ['B', 'A']]`，那麼第一次移動是將圓盤從杆 `A` 移動到杆 `C`，第二次移動是將圓盤從杆 `B` 移動到杆 `A`。

# --instructions--

寫一個函數返回圓盤移動到的杆的嵌套數組。

# --hints--

`towerOfHanoi` 應該是一個函數。

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` 應該返回 7 次移動。

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` 應該返回 `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`。

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` 的第 10 步應該是 Y -> X。

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` 的前十步應該是 `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

```js
assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);
```

# --seed--

## --after-user-code--

```js
const res3 = towerOfHanoi(3, 'A', 'B', 'C');
const res3Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']];
const res5 = towerOfHanoi(5, 'X', 'Y', 'Z');
const res7First10Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A']];
```

## --seed-contents--

```js
function towerOfHanoi(n, a, b, c) {

  return [[]];
}
```

# --solutions--

```js
function towerOfHanoi(n, a, b, c) {
  const res = [];
  towerOfHanoiHelper(n, a, c, b, res);
  return res;
}

function towerOfHanoiHelper(n, a, b, c, res) {
  if (n > 0) {
    towerOfHanoiHelper(n - 1, a, c, b, res);
    res.push([a, c]);
    towerOfHanoiHelper(n - 1, b, a, c, res);
  }
}
```
