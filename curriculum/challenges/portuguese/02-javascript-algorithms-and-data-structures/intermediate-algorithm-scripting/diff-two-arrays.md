---
id: a5de63ebea8dbee56860f4f2
title: Diferenciar dois arrays
challengeType: 1
forumTopicId: 16008
dashedName: diff-two-arrays
---

# --description--

Compare dois arrays e retorne um novo array com qualquer item encontrado em apenas um dos dois arrays passados, mas não ambos. Em outras palavras, retorne a diferença simétrica de dois arrays.

**Observação:** você pode retornar o array com seus elementos em qualquer ordem.

# --hints--

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` deve retornar um array.

```js
assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object');
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` deve retornar `["pink wool"]`.

```js
assert.sameMembers(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['pink wool']
);
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` deve retornar um array com um item.

```js
assert(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 1
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` deve retornar `["diorite", "pink wool"]`.

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['diorite', 'pink wool']
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` deve retornar um array com dois itens.

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 2
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` deve retornar `[]`.

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ),
  []
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` deve retornar um array vazio.

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 0
);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` deve retornar `[4]`.

```js
assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` deve retornar um array com um item.

```js
assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 1);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` deve retornar `["piglet", 4]`.

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), [
  'piglet',
  4
]);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` deve retornar um array com dois itens.

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length === 2);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` deve retornar `["snuffleupagus", "cookie monster", "elmo"]`.

```js
assert.sameMembers(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']), [
  'snuffleupagus',
  'cookie monster',
  'elmo'
]);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` deve retornar um array com três itens.

```js
assert(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length === 3);
```

`[1, "calf", 3, "piglet"], [7, "filly"]` deve retornar `[1, "calf", 3, "piglet", 7, "filly"]`.

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']), [
  1,
  'calf',
  3,
  'piglet',
  7,
  'filly'
]);
```

`[1, "calf", 3, "piglet"], [7, "filly"]` deve retornar um array com seis itens.

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length === 6);
```

# --seed--

## --seed-contents--

```js
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

# --solutions--

```js
function diffArray(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const newArr = [];

  set1.forEach(element => {
    if (!set2.has(element)) newArr.push(element);

  });

  set2.forEach(element => {
    if (!set1.has(element)) newArr.push(element);

  });

  return newArr;

}

```
