---
id: 5900f3b21000cf542c50fec5
title: 'Problem 70: Totient permutation'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

Euler's Totient function, ${\phi}(n)$ (sometimes called the phi function), is used to determine the number of positive numbers less than or equal to `n` which are relatively prime to `n`. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, ${\phi}(9) = 6$. The number 1 is considered to be relatively prime to every positive number, so ${\phi}(1) = 1$.

Interestingly, ${\phi}(87109) = 79180$, and it can be seen that 87109 is a permutation of 79180.

Find the value of `n`, 1 &lt; `n` &lt; `limit`, for which ${\phi}(n)$ is a permutation of `n` and the ratio $\displaystyle\frac{n}{{\phi}(n)}$ produces a minimum.

# --hints--

`totientPermutation(10000)` should return a number.

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` should return `4435`.

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` should return `75841`.

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` should return `474883`.

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` should return `8319823`.

```js
assert.strictEqual(totientPermutation(10000000), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation(limit) {

  return true;
}

totientPermutation(10000);
```

# --solutions--

```js
function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('');
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB);
  }

  const MAX_PRIME = 4000;
  const primes = getSievePrimes(MAX_PRIME);

  let nValue = 1;
  let minRatio = Infinity;

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j];
      if (num > limit) {
        break;
      }

      const phi = (primes[i] - 1) * (primes[j] - 1);
      const ratio = num / phi;

      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num;
        minRatio = ratio;
      }
    }
  }
  return nValue;
}
```
