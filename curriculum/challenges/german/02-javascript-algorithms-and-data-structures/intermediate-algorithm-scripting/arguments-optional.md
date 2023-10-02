---
id: a97fd23d9b809dac9921074f
title: Optionale Argumente
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

Erstelle eine Funktion, die zwei Argumente summiert. Wenn nur ein Argument angegeben wird, dann gib eine Funktion zurück, die ein Argument erwartet und die Summe zurückgibt.

Zum Beispiel sollte `addTogether(2, 3)` `5` zurückgeben, und `addTogether(2)` sollte eine Funktion zurückgeben.

Wenn du diese Funktion mit einem einzigen Argument aufrufst, erhältst du die Summe zurück:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` liefert `5`.

Wenn eines der beiden Argumente keine gültige Zahl ist, wird undefined zurückgegeben.

# --hints--

`addTogether(2, 3)` sollte 5 zurückgeben.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` should return 53.4.

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` sollte `undefined` zurückgeben.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` sollte `undefined` zurückgeben.

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` sollte `undefined` zurückgeben.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` sollte eine Funktion zurückgeben.

```js
assert.deepEqual(typeof(addTogether(5)), 'function');
```

`addTogether(5)(7)` sollte 12 zurückgeben.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` sollte `undefined` zurückgeben.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` sollte `undefined` zurückgeben.

```js
assert.isUndefined(addTogether(2, '3'));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```
