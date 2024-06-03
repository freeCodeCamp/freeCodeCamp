---
id: 5900f4c81000cf542c50ffd9
title: 'Завдання 347: найбільше ціле число, яке ділиться на два простих'
challengeType: 1
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

Найбільше ціле число $≤ 100$, яке ділиться на прості числа 2 та 3, дорівнює 96, оскільки $96 = 32 \times 3 = 2^5 \times 3$.

Нехай $M(p, q, N)$, де $p$ та $q$ є різними простими числами, буде найбільшим натуральним числом $≤ N$, яке ділиться лише на $p$ та $q$ або $M(p, q, N)=0$, якщо такого натурального числа не існує.

Наприклад, $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$, а не 90, оскільки 90 ділиться на 2, 3 і 5. Також $M(2, 73, 100) = 0$, оскільки не існує натурального числа $≤ 100$, яке ділиться на 2 і 73.

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
