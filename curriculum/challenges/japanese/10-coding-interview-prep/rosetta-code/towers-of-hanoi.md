---
id: 5951ed8945deab770972ae56
title: ハノイの塔
challengeType: 5
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

[ハノイの塔](https://en.wikipedia.org/wiki/Towers_of_Hanoi "wp: Towers_of_Hanoi") の問題を解いてください。

解では最初のパラメータとしてディスクの数を取り、ディスクを重ねるそれぞれの塔の名前として3つの文字列を使用します。たとえば、`towerOfHanoi(4, 'A', 'B', 'C')` のように記述します。 関数は、元の位置から目的地となる位置への移動のリストを含む配列の配列を返さなければなりません。

例えば、配列 `[['A', 'C'], ['B', 'A']]` は、最初の移動で塔 Aから塔 Cにディスクを動かし、2 回目の移動で塔 Bから塔 Aにディスクを動かすことを意味します。

<p></p>

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

`towerOfHanoi(5, "X", "Y", "Z")` の 10 番目の移動は Y -> X となる必要があります。

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` の最初の10 回の移動は `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]` となる必要があります。

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
