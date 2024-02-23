---
id: adf08ec01beb4f99fc7a68f2
title: Remover falsos
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Remover todos os valores falsos de um array. Retorna um novo array; não altere o array original.

Valores falsos (falsy) em JavaScript são `false`, `null`, `0`, `""`, `undefined`, e `NaN`.

Dica: tente converter cada valor para um booleano.

# --hints--

`bouncer([7, "ate", "", false, 9])` deve retornar `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` deve retornar `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` deve retornar `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` deve retornar `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

Você não deve mutar `arr`.

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
