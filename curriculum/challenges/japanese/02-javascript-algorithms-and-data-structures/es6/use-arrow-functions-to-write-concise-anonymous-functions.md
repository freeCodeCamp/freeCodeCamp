---
id: 587d7b87367417b2b2512b43
title: アロー関数を使用して簡潔な匿名関数を記述する
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

JavaScript では多くの場合、特に他の関数に引数として関数を渡す場合に、関数に名前を付ける必要がありません。 代わりに、インライン関数を作成します。 これらの関数は他の場所で再利用することがないため、名前を付ける必要はありません。

これを実現するため、次のような構文をよく使用します。

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 では、こうした方法で匿名関数を記述する必要がないように、構文糖が用意されています。 代わりに**アロー関数の構文**を使用できます。

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

関数本体がなく戻り値のみが存在する場合は、アロー関数の構文を使用して、コードを囲む中括弧やキーワード `return` を省略できます。 比較的小さな関数であれば、この方法で 1 行のステートメントにまとめることができます。

```js
const myFunc = () => "value";
```

このコードもまた、デフォルトで文字列 `value` を返します。

# --instructions--

`new Date()` を返す関数が変数 `magic` に割り当てられています。この関数を、アロー関数の構文を使用するように書き換えてください。 また、キーワード `var` による定義を使用しないでください。

# --hints--

`var` キーワードを置き換える必要があります。

```js
assert.notMatch(code, /var/g)
```

`magic` は (`const` を使用して宣言した) 定数変数である必要があります。

```js
assert.match(code, /const\s+magic/g)
```

`magic` は `function` である必要があります。

```js
assert(typeof magic === 'function');
```

`magic()` は正しい日付を返す必要があります。

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

`function` キーワードは使用しないでください。

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
