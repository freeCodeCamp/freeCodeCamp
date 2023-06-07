---
id: a3bfc1673c0526e06d3ac698
title: Summiere alle Primzahlen
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Eine <dfn>Primzahl</dfn> ist eine ganze Zahl größer als 1 mit genau zwei Divisoren: 1 und sich selbst. Zum Beispiel ist 2 eine Primzahl, weil sie nur durch 1 und 2 teilbar ist. Im Gegensatz dazu ist 4 keine Primzahl, da sie durch 1, 2 und 4 teilbar ist.

Schreibe `sumPrimes` neu, so dass es die Summe aller Primzahlen zurückgibt, die kleiner oder gleich Null sind.

# --hints--

`sumPrimes(10)` sollte eine Zahl zurückgeben.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` sollte 17 zurückgeben.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` sollte 73156 zurückgeben.

```js
assert.deepEqual(sumPrimes(977), 73156);
```

# --seed--

## --seed-contents--

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

# --solutions--

```js
class PrimeSeive {
  constructor(num) {
    const seive = Array(Math.floor((num - 1) / 2)).fill(true);
    const upper = Math.floor((num - 1) / 2);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);

    for (let i = 0; i <= sqrtUpper; i++) {
      if (seive[i]) {
        // Mark value in seive array
        const prime = 2 * i + 3;
        // Mark all multiples of this number as false (not prime)
        const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSqaredIndex; j < upper; j += prime) {
          seive[j] = false;
        }
      }
    }

    this._seive = seive;
  }

  isPrime(num) {
    return num === 2
      ? true
      : num % 2 === 0
        ? false
        : this.isOddPrime(num);
  }

  isOddPrime(num) {
    return this._seive[(num - 3) / 2];
  }
};

function sumPrimes(num) {
  const primeSeive = new PrimeSeive(num);

  let sum = 2;
  for (let i = 3; i <= num; i += 2) {
    if (primeSeive.isOddPrime(i)) sum += i;
  }
  return sum;
}

sumPrimes(10);
```
