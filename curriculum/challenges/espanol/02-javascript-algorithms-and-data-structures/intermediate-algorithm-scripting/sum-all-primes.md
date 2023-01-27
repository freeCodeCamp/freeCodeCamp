---
id: a3bfc1673c0526e06d3ac698
title: Suma todos los números primos
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Un <dfn>número primo</dfn> es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe `sumPrimes` para que devuelva la suma de todos los números primos que sean menores o iguales a num.

# --hints--

`sumPrimes(10)` debe devolver un número.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` debe devolver 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` debe devolver 73156.

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
