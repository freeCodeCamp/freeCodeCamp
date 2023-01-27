---
id: 587d7b8b367417b2b2512b50
title: 用 ES6 编写简洁的函数声明
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

在 ES5 中，当我们需要在对象中定义一个函数的时候，必须像这样使用 `function` 关键字：

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

用 ES6 的语法在对象中定义函数的时候，可以删除 `function` 关键词和冒号。 请看以下例子：

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

使用以上这种简短的语法，重构在 `bicycle` 对象中的 `setGear` 函数。

# --hints--

不应使用传统的函数定义方法。

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` 应是一个声明函数。

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` 应将 `gear` 的值改为 48。

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
