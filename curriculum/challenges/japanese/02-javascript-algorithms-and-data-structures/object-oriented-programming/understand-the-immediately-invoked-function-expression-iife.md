---
id: 587d7db2367417b2b2512b8b
title: 即時実行関数式 (IIFE) を理解する
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

JavaScript では、関数を宣言したらすぐに実行するというのが一般的なパターンです。

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

これは無名関数式で、即座に実行され、すぐに `Chirp, chirp!` を出力します。

関数には名前を付けず、変数に保存していないことに注意してください。 関数式の末尾にある 2 つの括弧 () により、直ちに実行または呼び出しをします。 このパターンのことを<dfn>即時実行関数式</dfn>または <dfn>IIFE</dfn> と呼びます。

# --instructions--

関数 `makeNest` を書き換え、その呼び出しを削除して、代わりに無名の即時実行関数式 (IIFE) にしてください。

# --hints--

関数は無名である必要があります。

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

関数の式の末尾に括弧を付けて、すぐに呼び出す必要があります。

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
