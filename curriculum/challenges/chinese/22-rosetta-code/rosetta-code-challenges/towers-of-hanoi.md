---
id: 5951ed8945deab770972ae56
title: 汉诺塔
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, `["source", "destination"]`.

例如，参数 `(4, 'A', 'B', 'C')`，移动列表的嵌套数组是 `[['A', 'C'], ['B', 'A']]`，那么第一次移动是将圆盘从杆 `A` 移动到杆 `C`，第二次移动是将圆盘从杆 `B` 移动到杆 `A`。

# --instructions--

写一个函数返回圆盘移动到的杆的嵌套数组。

# --hints--

`towerOfHanoi` 应该是一个函数。

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` 应该返回 7 次移动。

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` 应该返回 `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`。

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` 的第 10 步应该是 Y -> X。

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` 的前十步应该是 `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

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
