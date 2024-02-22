---
id: 594810f028c0303b75339ad5
title: Y-комбінатор
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

У строгому <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">функційному програмуванні</a> та лямбда-численні, функції (лямбда-вирази) не мають стану та можуть посилатися лише на аргументи охоплюваних функцій. Це виключає звичайне визначення рекурсивної функції, де функція пов’язана зі станом змінної, і стан цієї змінної використовується в тілі функції.

Y-комбінатор сам по собі є функцією без стану, яка при застосуванні до іншої такої функції повертає рекурсивну версію функції. Y-комбінатор є найпростішим представником класу таких функцій, які називають комбінаторами фіксованої точки.

# --instructions--

Визначте Y-комбінатор без стану та використайте його для обчислення факторіалів. Функцію `factorial(N)` вже надано.

# --hints--

`Y` має повернути функцію.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

`factorial(1)` має повернути 1.

```js
assert.equal(factorial(1), 1);
```

`factorial(2)` має повернути 2.

```js
assert.equal(factorial(2), 2);
```

`factorial(3)` має повернути 6.

```js
assert.equal(factorial(3), 6);
```

`factorial(4)` має повернути 24.

```js
assert.equal(factorial(4), 24);
```

`factorial(10)` має повернути 3628800.

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
