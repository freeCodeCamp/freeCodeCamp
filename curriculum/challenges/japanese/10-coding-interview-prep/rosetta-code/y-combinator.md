---
id: 594810f028c0303b75339ad5
title: Y コンビネータ
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. これにより、関数は変数の状態と関連し、変数の状態は関数本体で使用されるという通常の再帰関数の定義が排除されます。

The Y combinator is itself a stateless function that, when applied to another stateless function, returns a recursive version of the function. The Y combinator is the simplest of the class of such functions, called fixed-point combinators.

# --instructions--

Define the stateless Y combinator function and use it to compute the factorials. The `factorial(N)` function is already given to you.

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
