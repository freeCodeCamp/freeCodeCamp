---
id: a3bfc1673c0526e06d3ac698
title: 質數求和
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

質數（<dfn>prime number</dfn>）是大於 1 且僅可以被 1 和自己整除的數。 比如，2 就是一個質數，因爲它只可以被 1 和 2（它本身）整除。 相反，4 不是質數，因爲它可以被 1, 2 和 4 整除。

請完成 `sumPrimes` 方法，使其返回小於等於傳入參數數字的所有質數之和。

# --hints--

`sumPrimes(10)` 應返回一個數字。

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` 應返回 17。

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` 應返回 73156。

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
