---
id: 5900f4ed1000cf542c50ffff
title: 'Завдання 383: порівняння подільності факторіалів'
challengeType: 1
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

Нехай $f_5(n)$ буде найбільшим цілим числом $x$, за якого $5^x$ ділиться на $n$.

Наприклад, $f_5(625\\,000) = 7$.

Нехай $T_5(n)$ буде кількістю цілих чисел $i$, які задовільняють умови $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ та $1 ≤ i ≤ n$.

Можна довести, що $T_5({10}^3) = 68$ та $T_5({10}^9) = 2\\,408\\,210$.

Знайдіть $T_5({10}^{18})$.

# --hints--

`factorialDivisibilityComparison()` має повернути `22173624649806`.

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
