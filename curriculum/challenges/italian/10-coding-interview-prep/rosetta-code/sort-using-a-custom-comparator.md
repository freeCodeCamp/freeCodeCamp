---
id: 5a23c84252665b21eecc8016
title: Ordina usando un comparatore personalizzato
challengeType: 1
forumTopicId: 302309
dashedName: sort-using-a-custom-comparator
---

# --description--

Scrivi una funzione per ordinare un array (o una lista) di stringhe in ordine di lunghezza decrescente, e in ordine lessicografico ascendente per stringhe di uguale lunghezza.

# --hints--

`lengthSorter` dovrebbe essere una funzione.

```js
assert(typeof lengthSorter == 'function');
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` dovrebbe restituire un array.

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

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` dovrebbe restituire `["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]`.

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

`lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])` dovrebbe restituire `["going", "good", "hope", "your", "day", "is", "?","I"]`.

```js
assert.deepEqual(
  lengthSorter(['I', 'hope', 'your', 'day', 'is', 'going', 'good', '?']),
  ['going', 'good', 'hope', 'your', 'day', 'is', '?', 'I']
);
```

`lengthSorter(["Mine", "is", "going", "great"])` dovrebbe restituire `["going", "great", "Mine", "is"]`.

```js
assert.deepEqual(lengthSorter(['Mine', 'is', 'going', 'great']), [
  'going',
  'great',
  'Mine',
  'is'
]);
```

`lengthSorter(["Have", "fun", "sorting", "!!"])` dovrebbe restituire `["sorting", "Have", "fun", "!!"]`.

```js
assert.deepEqual(lengthSorter(['Have', 'fun', 'sorting', '!!']), [
  'sorting',
  'Have',
  'fun',
  '!!'
]);
```

`lengthSorter(["Everything", "is", "good", "!!"])` dovrebbe restituire `["Everything", "good", "!!", "is"]`.

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
