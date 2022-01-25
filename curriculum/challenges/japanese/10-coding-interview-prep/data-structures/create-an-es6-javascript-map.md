---
id: 587d825b367417b2b2512c8d
title: ES6 JavaScript マップを作成する
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

JavaScript の新バージョンでは、前回のチャレンジで手書きした機能の多くを提供する、組み込みの Map ブジェクトが提供されています。 この Map オブジェクトは通常の JavaScript オブジェクトと似ていますが、通常のオブジェクトにはない便利な機能を提供します。 例えば ES6 Map は、それに追加された要素の挿入順序を追跡します。 より網羅的なメソッドの概要を次に示します。`.has(key)` はキーの有無に基づいて true または false を返します。`.get(key)` はキーに関連付けられた値を返します。`.set(key, value)` は新しいキーと値のペアを設定します。`.delete(key)` はキーと値のペアを削除します。`.clear()` はすべてのキーと値のペアを削除します。`.entries()` は挿入順にすべてのキーの配列を返します。`.values()` は挿入順にすべての値の配列を返します。

# --instructions--

JavaScript Map オブジェクトを定義し、変数 myMap をそのオブジェクトに割り当ててください。 キーと値のペア `freeCodeCamp`、`Awesome!` (すばらしい！) を追加してください。

# --hints--

myMap オブジェクトが存在する必要があります。

```js
assert(typeof myMap === 'object');
```

myMap にはキーと値のペア `freeCodeCamp`、`Awesome!` が含まれている必要があります。

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
