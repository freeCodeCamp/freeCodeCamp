---
id: 594810f028c0303b75339ad5
title: Y комбінатор
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. Це виключає звичайне визначення рекурсивної функції, коли функція асоціюється зі станом змінної, а стан цієї змінної використовується в основній частині функції.

The Y combinator is itself a stateless function that, when applied to another stateless function, returns a recursive version of the function. The Y combinator is the simplest of the class of such functions, called fixed-point combinators.

# --instructions--

Define the stateless Y combinator function and use it to compute the factorials. The `factorial(N)` function is already given to you.

# --hints--

Y повинен повернути функцію.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) повинен повернути 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) повинен повернути 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) повинен повернути 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) повинен повернути 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) повинен повернути 3628800.

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
