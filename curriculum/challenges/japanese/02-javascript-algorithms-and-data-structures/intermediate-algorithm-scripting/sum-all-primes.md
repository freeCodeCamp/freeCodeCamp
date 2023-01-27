---
id: a3bfc1673c0526e06d3ac698
title: すべての素数を合計する
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

<dfn>素数</dfn>とは、1 より大きい整数で、約数として 1 とそれ自体の 2 つのみを持つものです。 たとえば、2 は 1 と 2 でしか割り切れないので素数です。 一方、4 は 1、2、4 で割り切れるので素数ではありません。

num 以下のすべての素数の合計を返すように `sumPrimes` を書き換えてください。

# --hints--

`sumPrimes(10)` は数値を返す必要があります。

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` は 17 を返す必要があります。

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` は 73156 を返す必要があります。

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
