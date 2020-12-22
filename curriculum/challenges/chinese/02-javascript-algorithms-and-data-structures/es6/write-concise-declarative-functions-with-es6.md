---
id: 587d7b8b367417b2b2512b50
title: 用 ES6 编写简洁的函数声明
challengeType: 1
forumTopicId: 301224
---

# --description--

在 ES5 中，当我们需要在对象中定义一个函数的时候，我们必须如下面这般使用`function`关键字：

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

在 ES6 语法的对象中定义函数的时候，你可以完全删除`function`关键字和冒号。请看以下例子：

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

使用以上这种简短的语法，重构在`bicycle`对象中的`setGear`函数。

# --hints--

不应使用`function`关键字定义方法。

```js
(getUserInput) => assert(!removeJSComments(code).match(/function/));
```

`setGear`应是一个函数。

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

执行`bicycle.setGear(48)`应可以让`gear`的值变为 48。

```js
assert(new bicycle.setGear(48).gear === 48);
```

# --solutions--

