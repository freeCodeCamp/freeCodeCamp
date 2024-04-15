---
id: 5900f4af1000cf542c50ffc1
title: 'Завдання 322: біноміальні коефіцієнти, які діляться на 10'
challengeType: 1
forumTopicId: 301979
dashedName: problem-322-binomial-coefficients-divisible-by-10
---

# --description--

Нехай $T(m, n)$ буде кількістю біноміальних коефіцієнтів ${}^iC_n$, які діляться на 10 без остачі за умови $n ≤ i &lt; m$ ($i$, $m$ та $n$ є натуральними числами).

Дано, що $T({10}^9, {10}^7 - 10) = 989\\,697\\,000$.

Знайдіть $T({10}^{18}, {10}^{12} - 10)$.

# --hints--

`binomialCoefficientsDivisibleBy10()` має повернути `999998760323314000`.

```js
assert.strictEqual(binomialCoefficientsDivisibleBy10(), 999998760323314000);
```

# --seed--

## --seed-contents--

```js
function binomialCoefficientsDivisibleBy10() {

  return true;
}

binomialCoefficientsDivisibleBy10();
```

# --solutions--

```js
// solution required
```
