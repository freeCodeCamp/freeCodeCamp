---
id: 5a23c84252665b21eecc7e7a
title: Згенерувати нижній регістр ASCII абетки
challengeType: 1
forumTopicId: 302274
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

Напишіть функцію, щоб згенерувати масив символів нижнього регістру ASCII для заданого діапазону. До прикладу, при заданому діапазоні `['a', 'd']`, функція має повернути `['a', 'b', 'c', 'd']`.

# --hints--

`lascii` має бути функцією.

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")` має повернути масив.

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii('a','d')` має повернути `[ 'a', 'b', 'c', 'd' ]`.

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii('c','i')` має повернути `[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]`.

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii('m','q')` має повернути `[ 'm', 'n', 'o', 'p', 'q' ]`.

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii('k','n')` має повернути `[ 'k', 'l', 'm', 'n' ]`.

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii('t','z')` має повернути `[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]`.

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
