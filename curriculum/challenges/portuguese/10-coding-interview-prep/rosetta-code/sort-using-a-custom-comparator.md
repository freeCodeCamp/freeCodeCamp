---
id: 5a23c84252665b21eecc8016
title: Ordenar usando um comparador personalizado
challengeType: 1
forumTopicId: 302309
dashedName: sort-using-a-custom-comparator
---

# --description--

Escrever uma função para ordenar um array (ou lista) de strings em ordem de tamanho decrescente, e em ordem lexicográfica crescente strings de mesmo tamanho.

# --hints--

`lengthSorter` deve ser uma função.

```js
assert(typeof lengthSorter == 'function');
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` deve retornar um array.

```js
assert(
  Array.isArray(
    lengthSorter([
      'Here',
      'are',
      'some',
      'sample',
      'strings',
      'to',
      'be',
      'sorted'
    ])
  )
);
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` deve retornar`["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]`.

```js
assert.deepEqual(
  lengthSorter([
    'Here',
    'are',
    'some',
    'sample',
    'strings',
    'to',
    'be',
    'sorted'
  ]),
  ['strings', 'sample', 'sorted', 'Here', 'some', 'are', 'be', 'to']
);
```

`lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])` deve retornar `["going", "good", "hope", "your", "day", "is", "?","I"]`.

```js
assert.deepEqual(
  lengthSorter(['I', 'hope', 'your', 'day', 'is', 'going', 'good', '?']),
  ['going', 'good', 'hope', 'your', 'day', 'is', '?', 'I']
);
```

`lengthSorter(["Mine", "is", "going", "great"])` deve retornar `["going", "great", "Mine", "is"]`.

```js
assert.deepEqual(lengthSorter(['Mine', 'is', 'going', 'great']), [
  'going',
  'great',
  'Mine',
  'is'
]);
```

`lengthSorter(["Have", "fun", "sorting", "!!"])` deve retornar `["sorting", "Have", "fun", "!!"]`.

```js
assert.deepEqual(lengthSorter(['Have', 'fun', 'sorting', '!!']), [
  'sorting',
  'Have',
  'fun',
  '!!'
]);
```

`lengthSorter(["Everything", "is", "good", "!!"])` deve retornar `["Everything", "good", "!!", "is"]`.

```js
assert.deepEqual(lengthSorter(['Everything', 'is', 'good', '!!']), [
  'Everything',
  'good',
  '!!',
  'is'
]);
```

# --seed--

## --seed-contents--

```js
function lengthSorter(arr) {

}
```

# --solutions--

```js
function lengthSorter(arr) {
  arr.sort(function(a, b) {
    var result = b.length - a.length;
    if (result == 0) result = a.localeCompare(b);
    return result;
  });
  return arr;
}
```
