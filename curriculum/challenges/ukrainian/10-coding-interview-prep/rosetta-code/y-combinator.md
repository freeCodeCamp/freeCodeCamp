---
id: 594810f028c0303b75339ad5
title: Y комбінатор
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

У строгому [ функціональному програмуванні](https://www.freecodecamp.org/news/the-principles-of-functional-programming/ "news: the principles of functional programming") та [ лямбда-численнях](https://en.wikipedia.org/wiki/lambda calculus "wp: lambda calculus"), функції (лямбда-вирази) не мають стану і можуть посилатися лише на аргументи охоплювальних функцій. Це виключає звичайне визначення рекурсивної функції, коли функція асоціюється зі станом змінної, а стан цієї змінної використовується в основній частині функції. [ Комбінатор Y ](https://mvanier.livejournal.com/2897.html) сам по собі є функцією без стану, яка при застосуванні до іншої такої функції повертає рекурсивну версію функції. Комбінатор Y — найпростіший з класу таких функцій, який називається [ комбінаторами з фіксованою точкою](https://en.wikipedia.org/wiki/Fixed-point combinator "wp: fixed-point combinator").

# --instructions--

Визначте комбінаторну функцію Y без стану та використовуйте її для обчислення [factorial](https://en.wikipedia.org/wiki/Factorial "wp: factorial"). Функція `factorial(N)` вже дана. **Дивіться також:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Джим Вейріх: Пригоди у функціональному програмуванні</a>.</li>
</ul>

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
