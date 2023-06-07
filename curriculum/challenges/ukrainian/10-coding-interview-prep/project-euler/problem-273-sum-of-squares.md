---
id: 5900f47e1000cf542c50ff90
title: 'Завдання 273: Сума квадратів'
challengeType: 1
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

Розглянемо рівняння виду $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ та число $N$.

Для $N = 65$ є два рішення:

$a = 1, b = 8$ та $a = 4, b = 7$.

Ми називаємо $S(N)$ сумою значень $a$ усіх розв'язків $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ і числа $N$.

Таким чином $S(65) = 1 + 4 = 5$.

Знайдіть $\sum S(N)$ для всіх безквадратних чисел $N$, що діляться лише на прості числа виду $4k + 1$ with $4k + 1 &lt; 150$.

# --hints--

`sumOfSquares()` має повернутися як `2032447591196869000`.

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
