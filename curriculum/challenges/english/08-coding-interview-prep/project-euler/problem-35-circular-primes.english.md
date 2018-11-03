---
id: 5900f38f1000cf542c50fea2
challengeType: 5
title: 'Problem 35: Circular primes'
---

## Description
<section id='description'>
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
How many circular primes are there below n, whereas 100 <= n <= 1000000?
  
<br><strong>Note:</strong><br>
Circular primes individual rotation can exceeed `n`.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>circularPrimes(100)</code> should return 13.
    testString: assert(circularPrimes(100) == 13, '<code>circularPrimes(100)</code> should return 13.');
  - text: <code>circularPrimes(100000)</code> should return 43.
    testString: assert(circularPrimes(100000) == 43, '<code>circularPrimes(100000)</code> should return 43.');
  - text: <code>circularPrimes(250000)</code> should return 45.
    testString: assert(circularPrimes(250000) == 45, '<code>circularPrimes(250000)</code> should return 45.');
  - text: <code>circularPrimes(500000)</code> should return 49.
    testString: assert(circularPrimes(500000) == 49, '<code>circularPrimes(500000)</code> should return 49.');
  - text: <code>circularPrimes(750000)</code> should return 49.
    testString: assert(circularPrimes(750000) == 49, '<code>circularPrimes(750000)</code> should return 49.');
  - text: <code>circularPrimes(1000000)</code> should return 55.
    testString: assert(circularPrimes(1000000) == 55, '<code>circularPrimes(1000000)</code> should return 55.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function circularPrimes(n) {
  // Good luck!
  return n;
}

circularPrimes(1000000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function rotate(n) {
  if (n.length == 1) return n;
  return `${n % 10}${Math.floor(n / 10)}`;
}

function isPrime(num) {
  const upperBound = Math.ceil(Math.sqrt(num));

  if (num % 2 === 0 && num !== 2) return false;

  for (let i = 3; i <= upperBound; i += 2) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function circularPrimes(n) {
  const primes = [];
  let count = 0;

  // Making primes array
  for (let i = 0; i < n; i++) {
    primes.push(i);
  }
  primes[1] = 0;

  // Getting upperbound
  const upperBound = Math.ceil(Math.sqrt(n));

  // Treating multiples of 2 as special cases
  for (let i = 4; i < n; i += 2) {
    primes[i] = 0;
  }

  // Setting other non-prime numbers to 0
  for (let i = 3; i < upperBound; i += 2) {
    for (let j = i * i; j < n; j += i) {
      primes[j] = 0;
    }
  }

  // Iterating through the array
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      let curr = String(primes[i]);
      let tmp = 1; // tmp variable to hold the no of rotations
      for (let x = rotate(curr); x != curr; x = rotate(x)) {
        if (x > n && isPrime(x)) {
          continue;
        } else if (!primes[x]) {
          // If the rotated value is 0 then its not a ciruclar prime, break the loop
          tmp = 0;
          break;
        }
        tmp++;
        primes[x] = 0;
      }
      count += tmp;
    }
  }
  return count;
}
```

</section>
