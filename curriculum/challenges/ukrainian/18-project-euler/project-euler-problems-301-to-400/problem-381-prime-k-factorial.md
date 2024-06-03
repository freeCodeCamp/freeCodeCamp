---
id: 5900f4ea1000cf542c50fffc
title: 'Завдання 381: факторіал (просте число k)'
challengeType: 1
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

Нехай $S(p) = (\sum (p - k)!)\bmod (p)$ за умови $1 ≤ k ≤ 5$, де $p$ є простим числом.

Наприклад, якщо $p = 7$,

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

Оскільки $872\bmod (7) = 4$, $S(7) = 4$.

Можна довести, що $\sum S(p) = 480$ за умови $5 ≤ p &lt; 100$.

Знайдіть $\sum S(p)$ за умови $5 ≤ p &lt; {10}^8$.

# --hints--

`primeKFactorial()` має повернути `139602943319822`.

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

# --seed--

## --seed-contents--

```js
function primeKFactorial() {

  return true;
}

primeKFactorial();
```

# --solutions--

```js
// solution required
```
