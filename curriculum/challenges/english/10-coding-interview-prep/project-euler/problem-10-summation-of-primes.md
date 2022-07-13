---
id: 5900f3761000cf542c50fe89
title: 'Problem 10: Summation of primes'
challengeType: 1
forumTopicId: 301723
dashedName: problem-10-summation-of-primes
---

# --description--

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below `n`.

# --hints--

`primeSummation(17)` should return a number.

```js
assert(typeof primeSummation(17) === 'number');
```

`primeSummation(17)` should return 41.

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)` should return 277050.

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)` should return 873608362.

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)` should return 142913828922.

```js
assert.strictEqual(primeSummation(2000000), 142913828922);
```

# --seed--

## --seed-contents--

```js
function primeSummation(n) {

  return true;
}

primeSummation(2000000);
```

# --solutions--

```js
const NUM_PRIMES = 2000000;
const PRIME_SEIVE = Array(Math.floor((NUM_PRIMES-1)/2)).fill(true);
(function initPrimes(num) {
  const upper = Math.floor((num - 1) / 2);
  const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
  for (let i = 0; i <= sqrtUpper; i++) {
    if (PRIME_SEIVE[i]) {
      // Mark value in PRIMES array
      const prime = 2 * i + 3;
      // Mark all multiples of this number as false (not prime)
      const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
      for (let j = primeSqaredIndex; j < upper; j += prime) {
        PRIME_SEIVE[j] = false;
      }
    }
  }
})(NUM_PRIMES);

function isOddNumberPrime(num) {
  return PRIME_SEIVE[(num - 3) / 2];
}

function primeSummation(n) {
  let sum = 2;
  for (let i = 3; i < n; i += 2) {
    if (isOddNumberPrime(i)) sum += i;
  }
  return sum;
}
```
