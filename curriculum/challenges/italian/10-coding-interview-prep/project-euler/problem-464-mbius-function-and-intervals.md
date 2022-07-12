---
id: 5900f53d1000cf542c51004f
title: 'Problema 464: Funzione di Möbius e intervalli'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

La funzione di Möbius, indicata con $μ(n)$, è definita come:

- $μ(n) = (-1)^{ω(n)}$ se $n$ è quadrato (dove $ω(n)$ è il numero di fattori primi distinti di $n$)
- $μ(n) = 0$ se $n$ non è privo di quadrati.

Sia $P(a, b)$ il numero di interi $n$ nell'intervallo $[a, b]$ in modo che $μ(n) = 1$.

Sia $N(a, b)$ il numero di interi $n$ nell'intervallo $[a, b]$ in modo che $μ(n) = -1$.

Per esempio, $P(2, 10) = 2$ e $N(2, 10) = 4$.

Sia $C(n)$ il numero di coppie intere $(a, b)$ in modo che:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, e
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

Per esempio, $C(10) = 13$, $C(500) = 16\\,676$ e $C(10\\,000) = 20\\,155\\,319$.

Trova $C(20\\,000\\,000)$.

# --hints--

`mobiusFunctionAndIntervals()` dovrebbe restituire `198775297232878`.

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
