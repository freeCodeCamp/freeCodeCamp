---
id: 5e6dd14192286d95fc43046e
title: Herausforderung der längsten Zeichenkette
challengeType: 1
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

In this challenge, you have to find the strings that are the longest among the given strings.

# --instructions--

Schreibe eine Funktion, die eine Anordnung von Zeichenketten annimmt und die Zeichenketten zurückgibt, deren Länge der längsten Länge entspricht.

# --hints--

`longestString` sollte eine Funktion sein.

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` sollte `["ccc", "ggg"]` zurückgeben.

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` sollte `["afedg", "sdccc", "efdee", "geegg"]` zurückgeben.

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` sollte `["bhghgb", "fssdrr"]` zurückgeben.

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` sollte `["ahgfhg", "bdsfsb", "ggdsfg"]` zurückgeben.

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` sollte `["gzzzgg"]` zurückgeben.

```js
assert.deepEqual(longestString(['a', 'bbdsf', 'ccc', 'edfe', 'gzzzgg']), [
  'gzzzgg'
]);
```

# --seed--

## --seed-contents--

```js
function longestString(strings) {

}
```

# --solutions--

```js
function longestString(strings) {
    var mx = 0;
    var result = []
    strings.forEach(function (e) {
        if (e.length > mx) {
            mx = e.length
            result = [e]
        } else if (e.length == mx)
            result.push(e)
    })

    return result
}
```
