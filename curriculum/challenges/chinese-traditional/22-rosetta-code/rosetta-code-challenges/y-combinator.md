---
id: 594810f028c0303b75339ad5
title: Y 組合器
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function.

Y 組合子本身是一個無狀態函數，當應用於另一個無狀態函數時，返回該函數的遞歸版本。 Y 組合子是這類功能中最簡單的一類，稱爲不動點組合子。

# --instructions--

定義無狀態的 Y 組合子函數並使用它來計算階乘。 `factorial(N)` 函數已經定義好了。

# --hints--

Y 應該返回一個函數。

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) 應該返回 1。

```js
assert.equal(factorial(1), 1);
```

factorial(2) 應該返回 2。

```js
assert.equal(factorial(2), 2);
```

factorial(3) 應該返回 6。

```js
assert.equal(factorial(3), 6);
```

factorial(4) 應該返回 24。

```js
assert.equal(factorial(4), 24);
```

factorial(10) 應該返回 3628800。

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
