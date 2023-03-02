---
id: 5900f5311000cf542c510042
title: 'Problem 451: Modularer Kehrwert'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Betrachten wir die Zahl 15.

Es gibt acht positive Zahlen kleiner als 15 sind, die zu 15 koprimiert sind: 1, 2, 4, 7, 8, 11, 13, 14.

Der modulare Kehrwert dieser modulen Zahlen 15 sind: 1, 8, 4, 13, 2, 11, 7, 14, denn

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

Lasse $I(n)$ die größte positive Zahl $m$ kleiner als $n - 1$ sein, sodass der modulare Kehrwert von $m$ modulo $n$ gleich $m$ ist.

Somit ist $I(15) = 11$.

Außerdem $I(100) = 51$ und $I(7) = 1$.

Finde $\sum l(n)$ für $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` sollte `153651073760956` zurückgeben.

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
