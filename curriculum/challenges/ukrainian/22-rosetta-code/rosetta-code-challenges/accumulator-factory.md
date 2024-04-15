---
id: 594810f028c0303b75339ace
title: Фабрика акумуляторів
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

Проблема, поставлена Полом Гремом, полягає у створенні функції, яка приймає один (числовий) аргумент та повертає іншу функцію, тобто акумулятор. Повернений акумулятор також приймає один числовий аргумент та повертає суму всіх числових значень, переданих до акумулятора (включно з початковим переданим значенням, коли було створено акумулятор).

# --instructions--

Створіть функцію, яка приймає число $n$ та генерує акумулятори, що повертають суму всіх переданих чисел.

**Правила:**

Не використовуйте глобальні змінні.

**Підказка:**

Замикання економить зовнішній стан.

# --hints--

`accumulator` має бути функцією.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` має повернути функцію.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` має повернути число.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Якщо передати значення 3, -4, 1.5 та 5, то має повернутись 5.5.

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
