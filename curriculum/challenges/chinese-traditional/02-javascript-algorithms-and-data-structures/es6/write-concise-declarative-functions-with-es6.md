---
id: 587d7b8b367417b2b2512b50
title: 用 ES6 編寫簡潔的函數聲明
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

在 ES5 中，當我們需要在對象中定義一個函數的時候，必須像這樣使用 `function` 關鍵字：

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

用 ES6 的語法在對象中定義函數的時候，可以刪除 `function` 關鍵詞和冒號。 請看以下例子：

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

使用以上這種簡短的語法，重構在 `bicycle` 對象中的 `setGear` 函數。

# --hints--

不應使用傳統的函數定義方法。

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` 應是一個聲明函數。

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` 應將 `gear` 的值改爲 48。

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
