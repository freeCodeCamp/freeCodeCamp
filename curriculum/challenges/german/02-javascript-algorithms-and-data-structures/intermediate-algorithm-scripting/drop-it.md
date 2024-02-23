---
id: a5deed1811a43193f9f1c841
title: Lass es fallen
challengeType: 1
forumTopicId: 16010
dashedName: drop-it
---

# --description--

Wenn du das Array `arr` hast, iteriere und entferne jedes Element, beginnend mit dem ersten Element (dem Index 0), bis die Funktion `func` `true` zurückgibt, wenn das iterierte Element durchlaufen wird.

Dann gib den Rest des Arrays zurück, wenn die Bedingung erfüllt ist. Ansonsten sollte `arr` als leeres Array zurückgegeben werden.

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` sollte `[3, 4]` zurückgeben.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` sollte `[1, 0, 1]` zurückgeben.

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` sollte `[1, 2, 3]` zurückgeben.

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` sollte `[]` zurückgeben.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` sollte `[7, 4]` zurückgeben.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` sollte `[3, 9, 2]` zurückgeben.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
