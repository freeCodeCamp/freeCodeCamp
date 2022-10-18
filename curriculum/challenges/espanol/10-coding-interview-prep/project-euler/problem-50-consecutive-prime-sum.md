---
id: 5900f39e1000cf542c50feb1
title: 'Problem 50: Consecutive prime sum'
challengeType: 1
forumTopicId: 302161
dashedName: problem-50-consecutive-prime-sum
---

# --description--

The prime 41, can be written as the sum of six consecutive primes:

<div style='text-align: center;'>41 = 2 + 3 + 5 + 7 + 11 + 13</div>

This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

# --hints--

`consecutivePrimeSum(1000)` should return a number.

```js
assert(typeof consecutivePrimeSum(1000) === 'number');
```

`consecutivePrimeSum(1000)` should return 953.

```js
assert.strictEqual(consecutivePrimeSum(1000), 953);
```

`consecutivePrimeSum(1000000)` should return 997651.

```js
assert.strictEqual(consecutivePrimeSum(1000000), 997651);
```

# --seed--

## --seed-contents--

```js
function consecutivePrimeSum(limit) {

  return true;
}

consecutivePrimeSum(1000000);
```

# --solutions--

```js
// Initalize prime number list with sieve
const NUM_PRIMES = 1000000;
const PRIMES = [2];
const PRIME_SIEVE = Array(Math.floor((NUM_PRIMES-1)/2)).fill(true);
(function initPrimes(num) {
  const upper = Math.floor((num - 1) / 2);
  const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
  for (let i = 0; i <= sqrtUpper; i++) {
    if (PRIME_SIEVE[i]) {
      // Mark value in PRIMES array
      const prime = 2 * i + 3;
      PRIMES.push(prime);
      // Mark all multiples of this number as false (not prime)
      const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
      for (let j = primeSqaredIndex; j < upper; j += prime)
        PRIME_SIEVE[j] = false;
    }
  }
  for (let i = sqrtUpper + 1; i < upper; i++) {
    if (PRIME_SIEVE[i])
      PRIMES.push(2 * i + 3);
  }
})(NUM_PRIMES);

function isPrime(num) {
  if (num === 2)
    return true;
  else if (num % 2 === 0)
    return false
  else
    return PRIME_SIEVE[(num - 3) / 2];
}

function consecutivePrimeSum(limit) {
  // Initalize for longest sum < 100
  let bestPrime = 41;
  let bestI = 0;
  let bestJ = 5;

  // Find longest sum < limit
  let sumOfCurrRange = 41;
  let i = 0, j = 5;
  // -- Loop while current some starting at i is < limit
  while (sumOfCurrRange < limit) {
    let currSum = sumOfCurrRange;
    // -- Loop while pushing j towards end of PRIMES list
    //      keeping sum under limit
    while (currSum < limit) {
      if (isPrime(currSum)) {
        bestPrime = sumOfCurrRange = currSum;
        bestI = i;
        bestJ = j;
      }
      // -- Increment inner loop
      j++;
      currSum += PRIMES[j];
    }
    // -- Increment outer loop
    i++;
    j = i + (bestJ - bestI);
    sumOfCurrRange -= PRIMES[i - 1];
    sumOfCurrRange += PRIMES[j];
  }
  // Return
  return bestPrime;
}
```
