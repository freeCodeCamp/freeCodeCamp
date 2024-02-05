---
id: 5900f53d1000cf542c51004f
title: 'Problema 464: Función e intervalos Möbius'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

The Möbius function, denoted $μ(n)$, is defined as:

- $μ(n) = (-1)^{ω(n)}$ if $n$ is squarefree (where $ω(n)$ is the number of distinct prime factors of $n$)
- $μ(n) = 0$ if $n$ is not squarefree.

Sean $P(a, b)$ el número de enteros $n$ en el intervalo $[a, b]$ tales que $μ(n) = 1$.

Sean $N(a, b)$ el número de enteros $n$ en el intervalo $[a, b]$ tales que $μ(n) = -1$.

Por ejemplo, $P(2, 10) = 2$ and $N(2, 10) = 4$.

Sea $C(n)$ el número de entero par $(a, b)$ tal que:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, and
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

Por ejemplo, $C(10) = 13$, $C(500) = 16\\,676$ y $C(10\\,000) = 20\\,155\\,319$.

Encuentra $C(20\\,000\\,000)$.

# --hints--

`mobiusFunctionAndIntervals()` debería devolver `198775297232878`.

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function mobiusFunctionAndIntervals() {

  return true;
}

mobiusFunctionAndIntervals();
```

# --solutions--

```js
// solution required
```
