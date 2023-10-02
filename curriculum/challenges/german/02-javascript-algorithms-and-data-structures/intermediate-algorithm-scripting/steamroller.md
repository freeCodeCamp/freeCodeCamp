---
id: ab306dbdcc907c7ddfc30830
title: Dampfwalze
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

Reduziere ein verschachteltes Array. Du musst die verschiedenen Ebenen der Verschachtelung berücksichtigen.

# --hints--

`steamrollArray([[["a"]], [["b"]]])` sollte `["a", "b"]` zurückgeben.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` sollte `[1, 2, 3, 4]` zurückgeben.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` sollte `[1, 3, 4]` zurückgeben.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` sollte `[1, {}, 3, 4]` zurückgeben.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

Deine Lösung sollte nicht `Array.prototype.flat()`- oder `Array.prototype.flatMap()`-Methoden verwenden.

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

Globale Variablen sollten nicht verwendet werden.

```js
steamrollArray([1, {}, [3, [[4]]]])
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
```

# --seed--

## --seed-contents--

```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```
