---
id: 594810f028c0303b75339ace
title: Акумуляторна фабрика
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. Повернена акумуляторна функція в свою чергу також бере один числовий аргумент, і повертає суму усіх числових значень, прийнятих до цього часу до цього акумулятора (включаючи початкове значення, передане при створенні акумулятора).

# --instructions--

Створіть функцію, яка приймає число $n$ і генерує акумуляторні функції, які повертають суму кожного числа, яке до них додадуть.

**Правила:**

Не використовуйте глобальні змінні.

**Підказка:**

Закриття економить зовнішній стан.

# --hints--

`accumulator` має бути функцією.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` має відображати функцію.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` має відображати число.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Перехід у значеннях 3, -4, 1.5 і 5 має видати 5,5.

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
