---
id: 5900f4c81000cf542c50ffd9
title: 'Задача 347: Найбільше ціле число ділиться на два простих'
challengeType: 1
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

Найбільше ціле число $≤ 100$, яке ділиться на прості числа 2 і 3, дорівнює 96, як $96 = 32 \tразів 3 = 2^5 \tвираховує 3$.

На два різні прості числа, $p$ і $q$, $M(p, q, q, N)$ буде найбільшим додатним цілим числом, $≤ N$ ділиться тільки на $p$ і $q$ і $M(p, q, N)=0$, якщо такого додатного цілого не існує.

Напр. $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ а не 90, тому що 90 ділиться на 2, 3 і 5. Також $M(2, 73, 100) = 0$, тому що не існує додатного цілого числа $ ≤ 100$, яке ділиться як на 2, так і на 73.

Нехай $S(N)$ буде сумою всіх різних $M(p, q, N)$. $S(100)=2262$.

Знайдіть $S(10\\,000\\,000)$.

# --hints--

`integerDivisibleByTwoPrimes()` має повернути `11109800204052`.

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function integerDivisibleByTwoPrimes() {

  return true;
}

integerDivisibleByTwoPrimes();
```

# --solutions--

```js
// solution required
```
