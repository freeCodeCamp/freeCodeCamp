---
id: 5cfa550e84205a357704ccb6
title: 分割代入を使用してオブジェクトから値を抽出する
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>分割代入</dfn>は ES6 で導入された特別な構文で、オブジェクトから値を直接抽出して適切に代入することができます。

次の ES5 コードを考えてみましょう。

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` は文字列の値 `John Doe` になり、`age` は数値 `34` になります。

ES6 の分割構文を使用すると同等の分割ステートメントは次のようになります。

```js
const { name, age } = user;
```

ここでも、`name` は文字列の値 `John Doe` になり、`age` は数値 `34` になります。

ここでは、`name` と `age` という変数が作成され、 `user` オブジェクトからそれぞれの値が代入されます。 ご覧のようにコードをすっきりと記述できます。

必要に応じてオブジェクトから値をいくつでも抽出できます。

# --instructions--

2 つの代入を同等の分割代入に置き換えてください。 ここでも、`HIGH_TEMPERATURES` オブジェクトの `today` と `tomorrow` の値を変数 `today` と `tomorrow` に代入する必要があります。

# --hints--

ES5 の代入構文を削除する必要があります。

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

分割を使用して `today` 変数を作成する必要があります。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

分割を使用して `tomorrow` 変数を作成する必要があります。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` は `77` に等しくなり、`tomorrow` は `80` に等しくなる必要があります。

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
