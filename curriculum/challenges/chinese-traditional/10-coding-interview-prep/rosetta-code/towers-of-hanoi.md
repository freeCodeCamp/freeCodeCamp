---
id: 5951ed8945deab770972ae56
title: Towers of Hanoi
challengeType: 5
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the [Towers of Hanoi](https://en.wikipedia.org/wiki/Towers_of_Hanoi "wp: Towers_of_Hanoi") problem.

Your solution should accept the number of discs as the first parameters, and three string used to identify each of the three stacks of discs, for example `towerOfHanoi(4, 'A', 'B', 'C')`. The function should return an array of arrays containing the list of moves, source -> destination.

For example, the array `[['A', 'C'], ['B', 'A']]` indicates that the 1st move was to move a disc from stack A to C, and the 2nd move was to move a disc from stack B to A.

<p></p>

# --hints--

`towerOfHanoi` should be a function.

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` should return 7 moves.

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` should return `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` 10th move should be Y -> X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` first ten moves should be `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

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
