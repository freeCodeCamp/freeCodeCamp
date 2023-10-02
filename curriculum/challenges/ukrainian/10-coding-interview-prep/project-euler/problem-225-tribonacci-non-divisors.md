---
id: 5900f44e1000cf542c50ff60
title: 'Завдання 225: Неподільні числа Трібоначчі'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

Послідовність чисел 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

визначається за допомогою $T_1 = T_2 = T_3 = 1$ і $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

Можна побачити, що жодне з цих чисел не ділиться на 27. Слід зазначити, що 27 — перше непарне число з такою властивістю.

Знайдіть ${124}^{\text{th}}$ непарне число, на яке не ділиться жодне число з послідовності вище.

# --hints--

`tribonacciNonDivisors()` має повернути `2009`.

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

# --seed--

## --seed-contents--

```js
function tribonacciNonDivisors() {

  return true;
}

tribonacciNonDivisors();
```

# --solutions--

```js
// solution required
```
