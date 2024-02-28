---
id: 587d825b367417b2b2512c8d
title: ES6 JavaScript マップを作成する
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

JavaScript の新バージョンでは、前回のチャレンジで手書きした機能の多くを提供する、組み込みの Map ブジェクトが提供されています。 この Map オブジェクトは通常の JavaScript オブジェクトと似ていますが、通常のオブジェクトにはない便利な機能を提供します。 例えば ES6 Map は、それに追加された要素の挿入順序を追跡します。 以下が Map オブジェクトの概要です:

- `.has(key)` はキーの有無をもとに true または false を返します。
- `.get(key)` はキーに関連付けられた値を返します。
- `.set(key, value)` は新しいキーと値のペアを設定します。
- `.delete(key)` はキーと値のペアを削除します。
- `.clear()` はキーと値のペアをすべて削除します。
- `.entries()` はすべてのキーを挿入順に並べた配列を返します。
- `.values()` はすべての値を挿入順に並べた配列を返します。

# --instructions--

JavaScript Map オブジェクトを定義し、変数 myMap をそのオブジェクトに割り当ててください。 キーと値のペア `freeCodeCamp`、`Awesome!` (すばらしい！) を追加してください。

# --hints--

`myMap` オブジェクトを用意する必要があります。

```js
assert(typeof myMap === 'object');
```

`myMap` にはキーと値のペアである `freeCodeCamp` と `Awesome!` のペアが含まれている必要があります。

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
