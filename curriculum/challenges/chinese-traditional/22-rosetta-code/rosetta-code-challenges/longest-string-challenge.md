---
id: 5e6dd14192286d95fc43046e
title: 最長的字符串挑戰
challengeType: 1
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

In this challenge, you have to find the strings that are the longest among the given strings.

# --instructions--

編寫一個函數，該函數接受一個字符串數組並返回長度等於最長長度的字符串。

# --hints--

`longestString` 應該是一個函數。

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` 應該返回一個數組。

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` 應該返回 `["ccc", "ggg"]`。

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` 應該返回 `["afedg", "sdccc", "efdee", "geegg"]`。

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` 應該返回 `["bhghgb", "fssdrr"]`。

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` 應該返回 `["ahgfhg", "bdsfsb", "ggdsfg"]`。

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` 應該返回 `["gzzzgg"]`。

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
