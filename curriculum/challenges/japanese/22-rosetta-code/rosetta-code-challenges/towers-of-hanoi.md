---
id: 5951ed8945deab770972ae56
title: ハノイの塔
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, `["source", "destination"]`.

たとえば、パラメータ `(4, 'A', 'B', 'C')` の結果は、ネストされた移動の配列 `[['A', 'C'], ['B', 'A']]` となります。これは、最初の移動でオブジェクトをスタック `A` から `C` に移動し、2 回目の移動でオブジェクトをスタック `B` から `A` に移動したことを示します。

# --instructions--

ネストされた配列内のオブジェクトをスタックするための移動回数を返す関数を作成してください。

# --hints--

`towerOfHanoi` は関数とします。

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` は 7 回分の移動を返す必要があります。

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` は `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]` を返す必要があります。

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` の 10 回目の移動は Y -> X となる必要があります。

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` の最初の 10 回の移動は `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]` となる必要があります。

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
