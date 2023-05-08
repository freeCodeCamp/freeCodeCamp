---
id: 5900f51d1000cf542c51002f
title: 'Problema 433: Etapas no algoritmo de Euclides'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

Considere $E(x_0, y_0)$ como o número de etapas necessárias para determinar o máximo divisor comum de $x_0$ e $y_0$ com o algoritmo de Euclides. Mais formalmente:

$$\begin{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ é o menor $n$, tal que $y_n = 0$.

Temos $E(1, 1) = 1$, $E(10, 6) = 3$ e $E(6, 10) = 4$.

Defina $S(N)$ como a soma de $E(x, y)$ para $1 ≤ x$, $y ≤ N$.

Temos $S(1) = 1$, $S(10) = 221$ e $S(100) = 39.826$.

Encontre $S(5 \times {10}^6)$.

# --hints--

`stepsInEuclidsAlgorithm()` deve retornar `326624372659664`.

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
