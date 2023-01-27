---
id: 596a8888ab7c01048de257d5
title: Deepcopy
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Scrivi una funzione che restituisce una copia profonda di un dato oggetto. La copia non deve essere lo stesso oggetto che è stato dato.

Questa sfida non testa per:

<ul>
  <li>Oggetti con proprietà che sono funzioni</li>
  <li>Oggetti Date o oggetti con proprietà che sono oggetti Date</li>
  <li>RegEx o oggetti con proprietà che sono RegEx</li>
  <li>Copiamento del prototype</li>
</ul>

# --hints--

`deepcopy` dovrebbe essere una funzione.

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` dovrebbe restituire un oggetto.

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` non dovrebbe restituire lo stesso oggetto dato.

```js
assert(deepcopy(obj2) != obj2);
```

Quando gli viene dato un oggetto contenente un array, `deepcopy` dovrebbe restituire una copia profonda dell'oggetto.

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

Quando gli viene dato un oggetto contenente un altro oggetto, `deepcopy` dovrebbe restituire una copia profonda dell'oggetto.

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
