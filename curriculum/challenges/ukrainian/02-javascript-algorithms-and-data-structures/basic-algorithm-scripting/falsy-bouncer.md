---
id: adf08ec01beb4f99fc7a68f2
title: Фільтрація помилкових значень масиву
challengeType: 5
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Видалити всі неправильні значення з масиву.

Неправильні значення в JavaScript: `false`, `null`, `0`, `""`, `undefined`, і `NaN`.

Підказка: спробуйте перетворити кожне значення на логічне значення.

# --hints--

`bouncer([7, "ate", "", false, 9])` має повернути `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` має вертати `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` має повертати `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` має повертати `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
