---
id: a39963a4c10bc8b4d4f06d7e
title: Suchen und Zerstören
challengeType: 1
forumTopicId: 16046
dashedName: seek-and-destroy
---

# --description--

Dir wird ein Ausgangsarray (das erste Argument in der `destroyer`-Funktion) zur Verfügung gestellt, gefolgt von einem oder mehreren Argumenten. Entferne alle Elemente aus dem Ausgangsarray, die den gleichen Wert wie diese Argumente haben.

**Hinweis:** Du musst das `arguments`-Objekt verwenden.

# --hints--

`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` sollte `[1, 1]` zurückgeben.

```js
assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
```

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` sollte `[1, 5, 1]` zurückgeben.

```js
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
```

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` sollte `[1]` zurückgeben.

```js
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
```

`destroyer([2, 3, 2, 3], 2, 3)` sollte `[]` zurückgeben.

```js
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
```

`destroyer(["tree", "hamburger", 53], "tree", 53)` sollte `["hamburger"]` zurückgeben.

```js
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), [
  'hamburger'
]);
```

`destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` sollte `[12,92,65]` zurückgeben.

```js
assert.deepEqual(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  ),
  [12, 92, 65]
);
```

# --seed--

## --seed-contents--

```js
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

# --solutions--

```js
function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  return arr.filter(function(e) { return !(e in hash);});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
