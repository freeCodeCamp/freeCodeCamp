---
id: 5951ed8945deab770972ae56
title: Ханойські вежі
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Розв’яжіть задачу Ханойської вежі. Кількість об’єктів буде надано як перший об’єкт, а потім буде надано рядки, які використовуються для ідентифікації кожного набору об’єктів. Створіть вкладений масив, який міститиме множину кроків: `["джерело", "призначення"]`.

Наприклад, результатом параметрів `(4, 'A', 'B', 'C')` буде вкладений масив кроків `[['A', 'C'], ['B', 'A']]`, де першим кроком було перемістити об’єкт з набору `A` до `C`, а другим кроком було перемістити об’єкт з набору `B` до `A`.

# --instructions--

Напишіть функцію, яка повертає ходи, щоб укласти об’єкти у вкладеному масиві.

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

Десятим ходом `towerOfHanoi(5, "X", "Y", "Z")` має бути Y -> X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

Першими десятьма ходами `towerOfHanoi(7, 'A', 'B', 'C')` мають бути `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

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
