---
id: 587d7b8b367417b2b2512b50
title: ES6 を使用して簡潔な宣言的関数を記述する
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

ES5 では、オブジェクト内で関数を定義する場合、次のようにキーワード `function` を使用する必要があります。

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

ES6 では、オブジェクト内で関数を定義する場合、`function` キーワードとコロンを完全に省略できます。 この構文の例を次に示します。

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

オブジェクト `bicycle` 内の関数 `setGear` を、上記で説明した簡潔な構文を使用してリファクタリングしてください。

# --hints--

従来の関数式は使用しないでください。

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` は宣言的な関数にする必要があります。

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` は、`gear` の値を 48 に変更する必要があります。

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
