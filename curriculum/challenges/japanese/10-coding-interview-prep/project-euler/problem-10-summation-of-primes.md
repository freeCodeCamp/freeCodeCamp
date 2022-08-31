---
id: 5900f3761000cf542c50fe89
title: '問題 10: 素数の和'
challengeType: 1
forumTopicId: 301723
dashedName: problem-10-summation-of-primes
---

# --description--

10 より小さい素数の和は、2 + 3 + 5 + 7 = 17 です。

`n` より小さい素数の総和を求めなさい。

# --hints--

`primeSummation(17)` は数値を返す必要があります。

```js
assert(typeof primeSummation(17) === 'number');
```

`primeSummation(17)` は 41 を返す必要があります。

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)` は 277050 を返す必要があります。

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)` は 873608362 を返す必要があります。

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)` は 142913828922 を返す必要があります。

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
