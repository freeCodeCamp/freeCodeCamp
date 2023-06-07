---
id: 5a23c84252665b21eecc8000
title: Сортування виокремленого підсписку
challengeType: 1
forumTopicId: 302307
dashedName: sort-disjoint-sublist
---

# --description--

Враховуючи список значень і набір цілих індексів у цьому списку значень, завдання полягає у тому, щоб відсортувати значення за заданими індексами, але зберегти значення за індексами за межами набору тих, які потрібно відсортувати.

Ваша функція повинна працювати з наступним списком значень і набором індексів:

<code>values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>

```js
indices(0-based): {6, 1, 7}
```

З наступним правильним результатом:

<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.

# --hints--

`sortDisjoint` має бути функцією.

```js
assert(typeof sortDisjoint == 'function');
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` має повернути масив.

```js
assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` має повернути `[7, 0, 5, 4, 3, 2, 1, 6]`.

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [
  7,
  0,
  5,
  4,
  3,
  2,
  1,
  6
]);
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])` має повернути `[7, 1, 2, 4, 3, 5, 6, 0]`.

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [
  7,
  1,
  2,
  4,
  3,
  5,
  6,
  0
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])` має повернути `[8, 1, 6, 5, 4, 3, 2, 7]`.

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [
  8,
  1,
  6,
  5,
  4,
  3,
  2,
  7
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])` має повернути `[8, 2, 6, 3, 4, 5, 7, 1]`.

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [
  8,
  2,
  6,
  3,
  4,
  5,
  7,
  1
]);
```

`sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])` має повернути `[6, 1, 7, 1, 3, 5, 6]`.

```js
assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [
  6,
  1,
  7,
  1,
  3,
  5,
  6
]);
```

# --seed--

## --seed-contents--

```js
function sortDisjoint(values, indices) {

}
```

# --solutions--

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```
