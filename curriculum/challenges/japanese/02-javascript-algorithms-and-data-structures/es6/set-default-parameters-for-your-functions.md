---
id: 587d7b88367417b2b2512b46
title: 関数のデフォルトパラメーターを設定する
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

より柔軟な関数を作成できるように、ES6 では関数の<dfn>デフォルトパラメーター</dfn>が導入されています。

次のコードをご覧ください。

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

コンソールには文字列 `Hello John` と `Hello Anonymous` が表示されます。

デフォルトパラメーターは、引数が指定されていない場合 (定義されていない場合) に適用されます。 上記の例でわかるように、パラメーター `name` には、パラメーターの値を指定しなければデフォルト値の `Anonymous` が渡されます。 デフォルト値は必要なパラメーターの数だけいくつでも追加できます。

# --instructions--

関数 `increment` を変更してデフォルトパラメーターを追加し、`value` が指定されていない場合に `number` に 1 を加えるようにしてください。

# --hints--

`increment(5, 2)` の結果は `7` になる必要があります。

```js
assert(increment(5, 2) === 7);
```

`increment(5)` の結果は `6` になる必要があります。

```js
assert(increment(5) === 6);
```

`value` に対して デフォルトパラメーター値 `1` を使用する必要があります。

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
