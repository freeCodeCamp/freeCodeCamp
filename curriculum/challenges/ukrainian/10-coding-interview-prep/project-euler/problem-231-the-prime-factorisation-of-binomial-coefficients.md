---
id: 5900f4531000cf542c50ff66
title: 'Завдання 231: Розклад біномальних коефіцієнтів на прості множники'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

Біномальний коефіцієнт $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 3 × 5$, і $2 + 2 + 2 + 3 + 5 = 14$.

Тож сумою членів розкладу на прості множники $\displaystyle\binom{10}{3}$ є $14$.

Знайдіть суму членів розкладу на прості множник $\binom{20\\,000\\,000}{15\\,000\\,000}$.

# --hints--

`primeFactorisation()` має повернути `7526965179680`.

```js
assert.strictEqual(primeFactorisation(), 7526965179680);
```

# --seed--

## --seed-contents--

```js
function primeFactorisation() {

  return true;
}

primeFactorisation();
```

# --solutions--

```js
// solution required
```
