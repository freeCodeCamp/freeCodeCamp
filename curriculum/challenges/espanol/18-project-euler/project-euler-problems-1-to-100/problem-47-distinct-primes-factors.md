---
id: 5900f39c1000cf542c50feae
title: 'Problem 47: Distinct primes factors'
challengeType: 1
forumTopicId: 302145
dashedName: problem-47-distinct-primes-factors
---

# --description--

The first two consecutive numbers to have two distinct prime factors are:

<div style='padding-left: 4em;'>
  14 = 2 × 7<br>
  15 = 3 × 5
</div>

Los primeros tres números consecutivos para tener tres factores primos distintos son:

<div style='padding-left: 4em;'>
  644 = 2<sup>2</sup> × 7 × 23<br>
  645 = 3 × 5 × 43<br>
  646 = 2 × 17 × 19
</div>

Encuentra los primeros cuatro números enteros consecutivos para tener cada uno de los cuatro factores primos distintos. Cuál es el primero de estos números?

# --hints--

`distinctPrimeFactors(2, 2)` debería devolver un número.

```js
assert(typeof distinctPrimeFactors(2, 2) === 'number');
```

`distinctPrimeFactors(2, 2)` debería devolver 14.

```js
assert.strictEqual(distinctPrimeFactors(2, 2), 14);
```

`distinctPrimeFactors(3, 3)` debería devolver 644.

```js
assert.strictEqual(distinctPrimeFactors(3, 3), 644);
```

`distinctPrimeFactors(4, 4)` debería devolver 134043.

```js
assert.strictEqual(distinctPrimeFactors(4, 4), 134043);
```

# --seed--

## --seed-contents--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {

  return true;
}

distinctPrimeFactors(4, 4);
```

# --solutions--

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  const primeLimit = targetNumPrimes * targetConsecutive * 10000;
  const numFactors = Array(primeLimit).fill(0);

  let numConsecutive = 0;
  for (let i = 2; i < primeLimit; i++) {
    if (numFactors[i] === targetNumPrimes) {
      // Current number is composite with target num factors
      numConsecutive++;
      if (numConsecutive === targetConsecutive) {
        return i - numConsecutive + 1;
      }
    } else {
      // Current number is not matching composite
      numConsecutive = 0;
      if (numFactors[i] === 0) {
        // Current number is prime
        for (let j = i; j < primeLimit; j += i) {
          numFactors[j]++;
        }
      }
    }
  }
}
```
