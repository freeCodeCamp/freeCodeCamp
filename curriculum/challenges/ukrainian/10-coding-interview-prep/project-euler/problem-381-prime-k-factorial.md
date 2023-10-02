---
id: 5900f4ea1000cf542c50fffc
title: 'Задача 381: Факторіал простого числа-k'
challengeType: 1
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

Нехай для простого числа $p$ $S(p) = (\sum (p - k)!)\bmod (p)$ for $1 ≤ k ≤ 5$.

Наприклад, якщо $p = 7$,

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

Тоді $872\bmod (7) = 4$, $S(7) = 4$.

Можна довести, що $\sum S(p) = 480$ для $5 ≤ p &lt; 100$.

Знайдіть $\sum S(p)$ для $5 ≤ p &lt; {10}^8$.

# --hints--

`primeKFactorial()` має видати `139602943319822`.

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
