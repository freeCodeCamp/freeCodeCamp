---
id: 5900f4c81000cf542c50ffd9
title: 'Problem 347: Größte Ganzzahl, die durch zwei Primzahlen teilbar ist'
challengeType: 1
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

The largest integer $≤ 100$ that is only divisible by both the primes 2 and 3 is 96, as $96 = 32 \times 3 = 2^5 \times 3$.

Für zwei verschiedene Primzahlen $p$ und $q$ sei $M(p, q, N)$ die größte positive ganze Zahl $≤ N$, die nur durch $p$ und $q$ teilbar ist, und $M(p, q, N)=0$, wenn eine solche positive ganze Zahl nicht existiert.

E.g. $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ and not 90 because 90 is divisible by 2, 3 and 5. Auch $M(2, 73, 100) = 0$, weil es keine positive ganze Zahl $≤ 100$ gibt, die sowohl durch 2 als auch durch 73 teilbar ist.

Lasse $S(N)$ die Summe aller verschiedenen $M(p, q, N)$. $S(100)=2262$.

Find $S(10\\,000\\,000)$.

# --hints--

`integerDivisibleByTwoPrimes()` should return `11109800204052`.

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function integerDivisibleByTwoPrimes() {

  return true;
}

integerDivisibleByTwoPrimes();
```

# --solutions--

```js
// solution required
```
