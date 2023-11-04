---
id: 5900f44e1000cf542c50ff60
title: 'Завдання 225: неподільні числа Трібоначчі'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

Послідовність 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

визначена як $T_1 = T_2 = T_3 = 1$ та $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

Можна побачити, що жодне з цих чисел не ділиться на 27. Варто зазначити, що 27 є першим непарним числом з такою властивістю.

Знайдіть ${124}^{\text{-не}}$ непарне число, на яке не ділиться жодне число з наданої послідовності.

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
