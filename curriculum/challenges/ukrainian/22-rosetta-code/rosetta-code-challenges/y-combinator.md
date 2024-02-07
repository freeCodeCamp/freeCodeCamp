---
id: 594810f028c0303b75339ad5
title: Y комбінатор
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In strict <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> and the lambda calculus, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function.

Комбінатор Y сам по собі є функцією без стану, яка при застосуванні до іншої такої функції повертає рекурсивну версію функції. Y комбінатор є найпростішим із класу таких функцій, які називаються комбінаторами з фіксованою точкою.

# --instructions--

Визначте функцію Y-комбінатора без збереження стану та використайте її для обчислення факторіалів. Функція `factorial(N)` вже дана.

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
