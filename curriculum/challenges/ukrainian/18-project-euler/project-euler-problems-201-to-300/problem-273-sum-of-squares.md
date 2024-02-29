---
id: 5900f47e1000cf542c50ff90
title: 'Завдання 273: сума квадратів'
challengeType: 1
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

Розглянемо рівняння вигляду $a^2 + b^2 = N$, за умови $0 ≤ a ≤ b$, де $a$, $b$ та $N$ є цілими числами.

За умови $N = 65$ існує два розв’язки:

$a = 1, b = 8$ та $a = 4, b = 7$.

Назвемо $S(N)$ сумою значень $a$ усіх розв’язків $a^2 + b^2 = N$, за умови $0 ≤ a ≤ b$, де $a$, $b$ та $N$ є цілими числами.

Таким чином $S(65) = 1 + 4 = 5$.

Знайдіть $\sum S(N)$ для всіх безквадратних чисел $N$, які діляться лише на прості числа вигляду $4k + 1$, де $4k + 1 &lt; 150$.

# --hints--

`sumOfSquares()` має повернути `2032447591196869000`.

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares() {

  return true;
}

sumOfSquares();
```

# --solutions--

```js
// solution required
```
