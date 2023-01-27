---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Erstelle eine Funktion, die einen Array namens `arr` durchsucht und das erste Element zurückgibt, das einen "Wahrheitstest" besteht. Das bedeutet, dass ein Element `x` den "Wahrheitstest" bestanden hat, wenn `func(x)` gleich `true` (engl. wahr) ist. Wenn kein Element den Test besteht, gib `undefined` (engl. undefiniert) zurück.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` sollte `8` zurückgeben.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` sollte `undefined` zurückgeben.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
