---
id: 5a23c84252665b21eecc7ffe
title: Sortieren einer Anordnung von zusammengesetzten Strukturen
challengeType: 1
forumTopicId: 302306
dashedName: sort-an-array-of-composite-structures
---

# --description--

Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array.

# --hints--

`sortByKey` sollte eine Funktion sein.

```js
assert(typeof sortByKey == 'function');
```

`sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])` sollte ein Array zurückgeben.

```js
assert(
  Array.isArray(
    sortByKey([
      { key: 3, value: 'foo' },
      { key: 2, value: 'bar' },
      { key: 4, value: 'baz' },
      { key: 1, value: 42 },
      { key: 5, value: 'another string' }
    ])
  )
);
```

`sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])` sollte `[{key: 1, value: 42}, {key: 2, value: "bar"}, {key: 3, value: "foo"}, {key: 4, value: "baz"}, {key: 5, value: "another string"}]` zurückgeben.

```js
assert.deepEqual(
  sortByKey([
    { key: 3, value: 'foo' },
    { key: 2, value: 'bar' },
    { key: 4, value: 'baz' },
    { key: 1, value: 42 },
    { key: 5, value: 'another string' }
  ]),
  [
    { key: 1, value: 42 },
    { key: 2, value: 'bar' },
    { key: 3, value: 'foo' },
    { key: 4, value: 'baz' },
    { key: 5, value: 'another string' }
  ]
);
```

`sortByKey([{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 20, name: "Alice"}, {key: 5, name: "Harry"}])` sollte `[{key: 3, name: "Joe"}, {key: 4, name: "Bill"}, {key: 5, name: "Harry"}, {key: 20, name: "Alice"}]` zurückgeben.

```js
assert.deepEqual(
  sortByKey([
    { key: 3, name: 'Joe' },
    { key: 4, name: 'Bill' },
    { key: 20, name: 'Alice' },
    { key: 5, name: 'Harry' }
  ]),
  [
    { key: 3, name: 'Joe' },
    { key: 4, name: 'Bill' },
    { key: 5, name: 'Harry' },
    { key: 20, name: 'Alice' }
  ]
);
```

`sortByKey([{key: 2341, name: "Adam"}, {key: 122, name: "Bernie"}, {key: 19, name: "David"}, {key: 5531, name: "Joe"}, {key: 1234, name: "Walter"}])` sollte `[{key: 19, name: "David"}, {key: 122, name: "Bernie"}, {key: 1234, name: "Walter"}, {key: 2341, name: "Adam"}, {key: 5531, name: "Joe"}]` zurückgeben.

```js
assert.deepEqual(
  sortByKey([
    { key: 2341, name: 'Adam' },
    { key: 122, name: 'Bernie' },
    { key: 19, name: 'David' },
    { key: 5531, name: 'Joe' },
    { key: 1234, name: 'Walter' }
  ]),
  [
    { key: 19, name: 'David' },
    { key: 122, name: 'Bernie' },
    { key: 1234, name: 'Walter' },
    { key: 2341, name: 'Adam' },
    { key: 5531, name: 'Joe' }
  ]
);
```

# --seed--

## --seed-contents--

```js
function sortByKey(arr) {

}
```

# --solutions--

```js
function sortByKey (arr) {
  return arr.sort(function(a, b) {
    return a.key - b.key
  });
}
```
