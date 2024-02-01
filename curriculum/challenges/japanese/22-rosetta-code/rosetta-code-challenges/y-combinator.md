---
id: 594810f028c0303b75339ad5
title: Y コンビネータ
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function.

Y コンビネータ は、それ自体がステートレス関数であり、他のステートレス関数に適用されると、関数の再帰バージョンを返します。 Y コンビネータは、不動点コンビネータと呼ばれるこのような関数のクラスの最も単純なものです。

# --instructions--

ステートレスな Y コンビネータ関数を定義し、それを使用して階乗を計算してください。 The `factorial(N)` function is already given to you.

# --hints--

Y should return a function.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) should return 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) should return 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) should return 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) should return 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) should return 3628800.

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
