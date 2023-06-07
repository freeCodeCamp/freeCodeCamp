---
id: 5900f4c81000cf542c50ffd9
title: 'Problema 347: Intero più grande divisibile per due primi'
challengeType: 1
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

Il più grande intero $≤ 100$ che è divisibile solo per entrambe i primi 2 e 3 è 96, poiché $96 = 32 \times 3 = 2^5 \times 3$.

Per due primi distinti $p$ e $q$ sia $M(p, q, N)$ il più grande intero positivo $≤ N$ divisibile solo per $p$ e $q$ e $M(p, q, N)=0$ se tale numero intero positivo non esiste.

Ad es. $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ e non 90 perché 90 è divisibile per 2, 3 e 5. Anche $M(2, 73, 100) = 0$ perché non esiste un numero intero positivo $≤ 100$ che è divisibile sia per 2 che 73.

Sia $S(N)$ la somma di tutti gli $M(p, q, N)$ distinti. $S(100)=2262$.

Trova $S(10\\,000\\,000)$.

# --hints--

`integerDivisibleByTwoPrimes()` dovrebbe restituire `11109800204052`.

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
