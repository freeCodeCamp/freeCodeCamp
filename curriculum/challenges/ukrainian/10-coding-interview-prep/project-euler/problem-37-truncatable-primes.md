---
id: 5900f3911000cf542c50fea4
title: 'Завдання 37: Скоротні прості числа'
challengeType: 1
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

Число 3739 має цікаву властивість. Оскільки воно є простим числом, з нього можна послідовно видаляти числа зліва направо і воно все рівно буде залишитися простим на кожному етапі: 3797, 797, 97, and 7. Це працює аналогічно і в іншому напрямку: 3797, 379, 37 та 3.

Знайдіть суму лише `n` (8 ≤ `n` ≤ 11) простих чисел, які можна скоротити як зліва направо, так і справа наліво.

ПРИМІТКА: 2, 3, 5 та 7 не вважаються скоротними простими числами.

# --hints--

`truncatablePrimes(8)` має повернути число.

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` має повернути число 1986.

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` має повернути число 5123.

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` має повернути число 8920.

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` має повернути число 748317.

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```
