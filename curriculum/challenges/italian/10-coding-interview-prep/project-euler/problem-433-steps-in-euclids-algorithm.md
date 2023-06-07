---
id: 5900f51d1000cf542c51002f
title: 'Problema 433: Passi nell''algoritmo di Euclide'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

Sia $E(x_0, y_0)$ il numero di passi necessari a determinare il maggiore divisore comune di $x_0$ e $y_0$ con l'algoritmo di Euclide. Più formalmente:

$$$\start{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ è il più piccolo $n$ tale che $y_n = 0$.

Abbiamo $E(1, 1) = 1$, $E(10, 6) = 3$ e $E(6, 10) = 4$.

Definisci $S(N)$ come la somma di $E(x, y)$ per $1 ≤ x$, $y ≤ N$.

Abbiamo $S(1) = 1$, $S(10) = 221$ e $S(100) = 39\\,826$.

Trova $S(5 \times {10}^6)$.

# --hints--

`stepsInEuclidsAlgorithm()` dovrebbe restituire `326624372659664`.

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
