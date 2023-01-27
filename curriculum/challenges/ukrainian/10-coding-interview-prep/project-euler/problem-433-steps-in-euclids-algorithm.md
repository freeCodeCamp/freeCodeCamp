---
id: 5900f51d1000cf542c51002f
title: 'Завдання 433: Кроки в алгоритмі Евкліда'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

Нехай $E(x_0, y_0)$ є кількістю кроків, необхідних для визначення найбільшого спільного дільника для $x_0$ та $y_0$ з алгоритмом Евкліда. Більш формально:

$$\begin{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ є найменшим $n$ так, щоб $y_n = 0$.

Ми маємо $E(1, 1) = 1$, $E(10, 6) = 3$ та $E(6, 10) = 4$.

Визначимо $S(N)$ як сума $E(x, y)$ для $1 ≤ x$, $y ≤ N$.

Ми маємо $S(1) = 1$, $S(10) = 221$ і $S(100) = 39\\,826$.

Знайдіть $S(5 \times {10}^6)$.

# --hints--

`stepsInEuclidsAlgorithm()` має видати `326624372659664`.

```js
assert.strictEqual(stepsInEuclidsAlgorithm(), 326624372659664);
```

# --seed--

## --seed-contents--

```js
function stepsInEuclidsAlgorithm() {

  return true;
}

stepsInEuclidsAlgorithm();
```

# --solutions--

```js
// solution required
```
