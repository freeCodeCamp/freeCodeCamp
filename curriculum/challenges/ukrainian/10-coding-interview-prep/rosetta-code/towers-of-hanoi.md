---
id: 5951ed8945deab770972ae56
title: Ханойські вежі
challengeType: 5
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Розв'яжіть [Towers of Hanoi](https://en.wikipedia.org/wiki/Towers_of_Hanoi "wp: Towers_of_Hanoi") завдання.

Ваше рішення повинно містити кількість дисків у якості першого параметру та три рядки, що використовуються для ідентифікації кожного з трьох стопок дисків, наприклад, `towerOfHanoi(4, 'A', 'B', 'C')`. Функція має повернути ряд масивів, що містять перелік кроків, джерело - -> призначення.

Наприклад, масив `[['A', 'C'], ['B', 'A']]` вказує на те, що 1-й хід полягав у переміщенні диску зі стержня А на С, а другий хід —переміщенні диск зі стержня В на А.

<p></p>

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
