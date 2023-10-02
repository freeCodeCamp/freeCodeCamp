---
id: 5900f53d1000cf542c51004f
title: 'Problema 464: Função de Möbius e intervalos'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

A função de Möbius, denotada por $μ(n)$, é definida como:

- $μ(n) = (-1)^{ω(n)}$ se $n$ não tiver quadrados (onde $ω(n)$ é o número de fatores primos distintos de $n$)
- $μ(n) = 0$ se $n$ não for sem quadrados.

Considere $P(a, b)$ como a quantidade de números inteiros $n$ no intervalo $[a, b]$, tal que $μ(n) = 1$.

Considere $N(a, b)$ como a quantidade de números inteiros $n$ no intervalo $[a, b]$, tal que $μ(n) = -1$.

Por exemplo, $P(2, 10) = 2$ e $N(2, 10) = 4$.

Considere $C(n)$ como a quantidade de pares de números inteiros $(a, b)$, tal que:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, e
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

Por exemplo, $C(10) = 13$, $C(500) = 16.676$ e $C(10.000) = 20.155.319$.

Encontre $C(20.000.000)$.

# --hints--

`mobiusFunctionAndIntervals()` deve retornar `198775297232878`.

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
