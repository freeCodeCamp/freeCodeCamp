---
id: 587d825b367417b2b2512c8d
title: ES6 JavaScript マップを作成する
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

JavaScript の新バージョンでは、前回のチャレンジで手書きした機能の多くを提供する、組み込みの Map ブジェクトが提供されています。 この Map オブジェクトは通常の JavaScript オブジェクトと似ていますが、通常のオブジェクトにはない便利な機能を提供します。 例えば ES6 Map は、それに追加された要素の挿入順序を追跡します。 Here is a more complete overview of its methods:

- `.has(key)` returns true or false based on the presence of a key
- `.get(key)` returns the value associated with a key
- `.set(key, value)` sets a new key, value pair
- `.delete(key)` removes a key, value pair
- `.clear()` removes all key, value pairs
- `.entries()` returns an array of all the keys in insertion order
- `.values()` returns an array of all the values in insertion order

# --instructions--

JavaScript Map オブジェクトを定義し、変数 myMap をそのオブジェクトに割り当ててください。 キーと値のペア `freeCodeCamp`、`Awesome!` (すばらしい！) を追加してください。

# --hints--

The `myMap` object should exist.

```js
assert(typeof myMap === 'object');
```

`myMap` should contain the key value pair `freeCodeCamp`, `Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
