---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Rimuovi tutti i valori falsy da un array. Restituisci un nuovo array; non mutare l'array originario.

I valori falsy in JavaScript sono `false`, `null`, `0`, `""`, `undefined` e `NaN`.

Suggerimento: Prova a convertire ogni valore in un Booleano.

# --hints--

`bouncer([7, "ate", "", false, 9])` dovrebbe restituire `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` dovrebbe restituire `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` dovrebbe restituire `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` dovrebbe restituire `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

Non dovresti mutare `arr`.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi'])
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
