---
id: adf08ec01beb4f99fc7a68f2
title: Rebote falsy
challengeType: 5
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Quita todos los valores falsos de un arreglo.

Los valores falsos en JavaScript son `false`, `null`, `0`, `""`, `undefined` y `NaN`.

Sugerencia: Intenta convertir cada valor a booleano.

# --hints--

`bouncer([7, "ate", "", false, 9])` debe devolver `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` debe devolver `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` debe devolver `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` debe devolver `[1, 2]`.

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
