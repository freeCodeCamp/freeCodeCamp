---
id: 5e6dd14192286d95fc43046e
title: Sfida della stringa più lunga
challengeType: 1
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

In questa sfida, devi trovare le stringhe che sono le più lunghe tra le stringhe date.

# --instructions--

Scrivi una funzione che richiede un array di stringhe e restituisce le stringhe che hanno una lunghezza uguale alla lunghezza più lunga.

# --hints--

`longestString` dovrebbe essere una funzione.

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` dovrebbe restituire un array.

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` dovrebbe restituire `["ccc", "ggg"]`.

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` dovrebbe restituire `["afedg", "sdccc", "efdee", "geegg"]`.

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` dovrebbe restituire `["bhghgb", "fssdrr"]`.

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` dovrebbe restituire `["ahgfhg", "bdsfsb", "ggdsfg"]`.

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` dovrebbe restituire `["gzzzgg"]`.

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
