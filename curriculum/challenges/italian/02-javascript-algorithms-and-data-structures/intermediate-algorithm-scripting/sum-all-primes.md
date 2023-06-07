---
id: a3bfc1673c0526e06d3ac698
title: Sommare tutti i numeri primi
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Un <dfn>numero primo</dfn> è un numero intero maggiore di 1 con esattamente due divisori: 1 e se stesso. Ad esempio, 2 è un numero primo perché è divisibile solo per 1 e per 2. Al contrario, 4 non è primo in quanto è divisibile per 1, 2 e 4.

Riscrivi `sumPrimes` in modo che restituisca la somma di tutti i numeri primi che sono inferiori o uguali a num.

# --hints--

`sumPrimes(10)` dovrebbe restituire un numero.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` dovrebbe restituire 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` dovrebbe restituire 73156.

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
