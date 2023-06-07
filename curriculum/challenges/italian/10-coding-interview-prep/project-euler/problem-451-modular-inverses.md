---
id: 5900f5311000cf542c510042
title: 'Problema 451: Inversi modulari'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Considera il numero 15.

Ci sono 8 numeri positivi sotto il 14 che sono coprimi di 15: 1, 2, 4, 7, 8, 11, 13, 14.

I modulari inversi di questi numeri modulo 15 sono: 1, 8, 4, 13, 2, 11, 7, 14 perché

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

Sia $I(n)$ il più grande numero positivo $m$ più piccolo di $n - 1$ tale che l'inverso modulare di $m$ modulo $n$ sia uguale a $m$ stesso.

Quindi $I(15) = 11$.

Anche $I(100) = 51$ e $I(7) = 1$.

Trova $\sum I(n)$ per $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` dovrebbe restituire `153651073760956`.

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
