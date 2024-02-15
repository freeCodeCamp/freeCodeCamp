---
id: 5e6dd14192286d95fc43046e
title: Desafio da string mais longa
challengeType: 1
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

Nesse desafio, você precisa encontrar as strings que são as mais longas entre as strings fornecidas.

# --instructions--

Escreva uma função que receba um array de strings e retorne as strings que têm um comprimento igual ao comprimento mais longo.

# --hints--

`longestString` deve ser uma função.

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` deve retornar um array.

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` deve retornar `["ccc", "ggg"]`.

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` deve retornar `["afedg", "sdccc", "efdee", "geegg"]`.

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` deve retornar `["bhghgb", "fssdrr"]`.

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` deve retornar `["ahgfhg", "bdsfsb", "ggdsfg"]`.

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` deve retornar `["gzzzgg"]`.

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
