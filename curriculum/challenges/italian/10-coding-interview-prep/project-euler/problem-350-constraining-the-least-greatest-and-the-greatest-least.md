---
id: 5900f4cb1000cf542c50ffdd
title: 'Problema 350: Mettere limiti al più piccolo più grande e al più grande più piccolo'
challengeType: 1
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

Una lista di dimensione $n$ è una sequenza di $n$ numeri naturali. Esempi sono (2, 4, 6), (2, 6, 4), (10, 6, 15, 6), e (11).

Il massimo comun divisore, o $gcd$ (da greatest common divisor in inglese), di una lista è il numero naturale più grande che divide tutti gli elementi della lista. Esempi: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ e $gcd(11) = 11$.

Il minimo comun divisore, o $lcm$ (dall'inglese least common multiple), di una lista è il numero naturale più piccolo che è divisibile da ogni numero della lista. Esempi: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ e $lcm(11) = 11$.

Sia $f(G, L, N)$ il numero di liste di dimensione $N$ con $gcd ≥ G$ e $lcm ≤ L$. Ad esempio:

$$\begin{align}   & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\   & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053 \end{align}$$

Trova $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

# --hints--

`leastGreatestAndGreatestLeast()` dovrebbe restituire `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
