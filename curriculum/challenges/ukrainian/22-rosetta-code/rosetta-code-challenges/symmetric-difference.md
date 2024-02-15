---
id: 5a23c84252665b21eecc8046
title: Симетрична різниця
challengeType: 1
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

Дано дві множини: *A* та *B*. Обчисліть $(A \\setminus B) \\cup (B \\setminus A).$ Тобто перерахуйте предмети, які розташовані або в *A*, або в *B*, але не в обох одночасно. Ця множина називається симетричною різницею множин *A* та *B*. Іншими словами: $(A \\cup B) \\setminus (A \\cap B)$ (множина предметів, які знаходяться в *A* або *B*, мінус множина предметів, які знаходяться в *A* та *B*).

Наприклад:

Для множин `A = [1, 2, 3]` та `B = [1, 3, 4]` симетричною різницею множин *A* та *B* є `[2, 4]`.

# --instructions--

Напишіть функцію, яка приймає два масиви як параметри та повертає симетричну різницю. Відсортуйте отриманий масив, перш ніж повернути його.

# --hints--

`symmetricDifference` має бути функцією.

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` має повернути масив.

```js
assert(
  Array.isArray(
    symmetricDifference(
      ['John', 'Bob', 'Mary', 'Serena'],
      ['Jim', 'Mary', 'John', 'Bob']
    )
  )
);
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` має повернути `["Jim", "Serena"]`.

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` має повернути `[1, 2, 4]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` має повернути `[1, 2, 5, 7, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` має повернути `[2, 4, 9]`.

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` має повернути `[1, 3, 4, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]), [
  1,
  3,
  4,
  8
]);
```

# --seed--

## --seed-contents--

```js
function symmetricDifference(A, B) {

}
```

# --solutions--

```js
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1;
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length; ) {
      if (u[i - 1] === u[i]) u.splice(i, 1);
      else i++;
    }
    return u;
  }

  return unique(
    relative_complement(A, B).concat(relative_complement(B, A))
  ).sort();
}
```
