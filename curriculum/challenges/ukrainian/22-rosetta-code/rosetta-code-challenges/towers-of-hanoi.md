---
id: 5951ed8945deab770972ae56
title: Ханойські вежі
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, `["source", "destination"]`.

Наприклад, параметри `(4, 'A', 'B', 'C')` призведуть до вкладеного масиву ходів `[['A', 'C'], ['B', 'A']]`, що вказує на те, що 1-м ходом було переміщення об’єкта з купи `A` до `C`, а 2-м ходом було переміщення об’єкт з купи `B` до `A`.

# --instructions--

Напишіть функцію, яка повертає ходи для укладання об’єктів у вкладений масив.

# --hints--

`towerOfHanoi` має бути функцією.

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` має повернути 7 ходів.

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` має повернути `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` 10-й хід має бути Y -> X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` перші десять ходів мають бути `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

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
