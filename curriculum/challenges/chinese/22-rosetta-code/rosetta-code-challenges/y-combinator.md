---
id: 594810f028c0303b75339ad5
title: Y 组合器
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function.

Y 组合子本身是一个无状态函数，当应用于另一个无状态函数时，返回该函数的递归版本。 Y 组合子是这类功能中最简单的一类，称为不动点组合子。

# --instructions--

定义无状态的 Y 组合子函数并使用它来计算阶乘。 `factorial(N)` 函数已经定义好了。

# --hints--

Y 应该返回一个函数。

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) 应该返回 1。

```js
assert.equal(factorial(1), 1);
```

factorial(2) 应该返回 2。

```js
assert.equal(factorial(2), 2);
```

factorial(3) 应该返回 6。

```js
assert.equal(factorial(3), 6);
```

factorial(4) 应该返回 24。

```js
assert.equal(factorial(4), 24);
```

factorial(10) 应该返回 3628800。

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --after-user-code--

```js
var factorial = Y(f => n => (n > 1 ? n * f(n - 1) : 1));
```

## --seed-contents--

```js
function Y(f) {
  return function() {

  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

# --solutions--

```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));
```
