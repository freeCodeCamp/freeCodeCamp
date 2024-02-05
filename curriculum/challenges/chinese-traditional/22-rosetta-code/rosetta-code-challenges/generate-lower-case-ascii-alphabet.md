---
id: 5a23c84252665b21eecc7e7a
title: 生成小寫 ASCII 字母表
challengeType: 1
forumTopicId: 302274
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

Write a function to generate an array of lower case ASCII characters for a given range. For example, given the range `['a', 'd']`, the function should return `['a', 'b', 'c', 'd']`.

# --hints--

`lascii` 應該是一個函數。

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")` 應該返回一個數組。

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii('a','d')` 應該返回 `[ 'a', 'b', 'c', 'd' ]`。

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii('c','i')` 應該返回 `[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]`。

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii('m','q')` 應該返回 `[ 'm', 'n', 'o', 'p', 'q' ]`。

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii('k','n')` 應該返回 `[ 'k', 'l', 'm', 'n' ]`。

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii('t','z')` 應該返回 `[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]`。

```js
assert.deepEqual(lascii('t', 'z'), results[4]);
```

# --seed--

## --after-user-code--

```js
let results=[
  [ 'a', 'b', 'c', 'd' ],
  [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ],
  [ 'm', 'n', 'o', 'p', 'q' ],
  [ 'k', 'l', 'm', 'n' ],
  [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
]
```

## --seed-contents--

```js
function lascii(cFrom, cTo) {

}
```

# --solutions--

```js
function lascii(cFrom, cTo) {

  function cRange(cFrom, cTo) {
    var iStart = cFrom.charCodeAt(0);

    return Array.apply(
      null, Array(cTo.charCodeAt(0) - iStart + 1)
    ).map(function (_, i) {

      return String.fromCharCode(iStart + i);

    });
  }

  return cRange(cFrom, cTo);

}
```
