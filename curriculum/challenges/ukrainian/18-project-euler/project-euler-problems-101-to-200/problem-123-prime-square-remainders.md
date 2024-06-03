---
id: 5900f3e71000cf542c50fefa
title: 'Завдання 123: прості квадратні остачі'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

Нехай $p_n$ є $n$-ним простим числом: 2, 3, 5, 7, 11, ..., а $r$ є остачею від ділення ${(p_n−1)}^n + {(p_n+1)}^n$ на ${p_n}^2$.

Наприклад, коли $n = 3, p_3 = 5$ та $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$.

Найменше значення $n$, за якого остача перевищує $10^9$, становить 7037.

Знайдіть найменше значення $n$, за якого остача перевищує $10^{10}$.

# --hints--

`primeSquareRemainders()` має повернути `21035`.

```js
assert.strictEqual(primeSquareRemainders(), 21035);
```

# --seed--

## --seed-contents--

```js
function primeSquareRemainders() {

  return true;
}

primeSquareRemainders();
```

# --solutions--

```js
// solution required
```
