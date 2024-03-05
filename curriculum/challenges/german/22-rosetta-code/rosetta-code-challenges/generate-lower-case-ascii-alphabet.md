---
id: 5a23c84252665b21eecc7e7a
title: Kleinbuchstaben-ASCII-Alphabet generieren
challengeType: 1
forumTopicId: 302274
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

Write a function to generate an array of lower case ASCII characters for a given range. For example, given the range `['a', 'd']`, the function should return `['a', 'b', 'c', 'd']`.

# --hints--

`lascii` sollte eine Funktion sein.

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")` sollte ein Array zurückgeben.

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii('a','d')` sollte `[ 'a', 'b', 'c', 'd' ]` zurückgeben.

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii('c','i')` sollte `[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]` zurückgeben.

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii('m','q')` sollte `[ 'm', 'n', 'o', 'p', 'q' ]` zurückgeben.

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii('k','n')` sollte `[ 'k', 'l', 'm', 'n' ]` zurückgeben.

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii('t','z')` sollte `[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]` zurückgeben.

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
