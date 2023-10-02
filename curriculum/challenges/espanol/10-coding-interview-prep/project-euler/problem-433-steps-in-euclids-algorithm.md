---
id: 5900f51d1000cf542c51002f
title: 'Problema 433: Pasos en el algoritmo de Euclides'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

Sea $E(x_0, y_0)$ el número de pasos que se necesitan para determinar el divisor común más grande de $x_0$ y $y_0$ con el algoritmo de Euclides. Más formalmente:

$$\begin{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ es el $n$ más pequeño tal que $y_n = 0$.

Tenemos $E(1, 1) = 1$, $E(10, 6) = 3$ y $E(6, 10) = 4$.

Define $S(N)$ como la suma de $E(x, y)$ para $1 ≤ x$, $y ≤ N$.

Tenemos $S(1) = 1$, $S(10) = 221$ y $S(100) = 39\\,826$.

Calcula $S(5 \times {10}^6)$.

# --hints--

`stepsInEuclidsAlgorithm()` debería devolver `326624372659664`.

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
