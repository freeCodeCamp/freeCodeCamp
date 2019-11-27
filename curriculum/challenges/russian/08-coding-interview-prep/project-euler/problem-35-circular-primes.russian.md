---
id: 5900f38f1000cf542c50fea2
challengeType: 5
title: 'Problem 35: Circular primes'
forumTopicId: 302009
localeTitle: 'Problem 35: Circular primes'
---

## Description
<section id='description'>
Число 197, называется круговым простым, поскольку все повороты цифр: 197, 971 и 719 сами по себе являются первыми. Есть тринадцать таких простых чисел ниже 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79 и 97. Сколько круговых простых чисел ниже n, тогда как 100 &lt;= n &lt; = 1000000?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>circularPrimes(100)</code> should return 13.
    testString: assert(circularPrimes(100) == 13);
  - text: <code>circularPrimes(100000)</code> should return 43.
    testString: assert(circularPrimes(100000) == 43);
  - text: <code>circularPrimes(250000)</code> should return 45.
    testString: assert(circularPrimes(250000) == 45);
  - text: <code>circularPrimes(500000)</code> should return 49.
    testString: assert(circularPrimes(500000) == 49);
  - text: <code>circularPrimes(750000)</code> should return 49.
    testString: assert(circularPrimes(750000) == 49);
  - text: <code>circularPrimes(1000000)</code> should return 55.
    testString: assert(circularPrimes(1000000) == 55);

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
  return n.slice(1) + n[0];
}

function circularPrimes(n) {
  // Nearest n < 10^k
  const bound = 10 ** Math.ceil(Math.log10(n));
  const primes = [0, 0, 2];
  let count = 0;

  // Making primes array
  for (let i = 4; i <= bound; i += 2) {
    primes.push(i - 1);
    primes.push(0);
  }

  // Getting upperbound
  const upperBound = Math.ceil(Math.sqrt(bound));

  // Setting other non-prime numbers to 0
  for (let i = 3; i < upperBound; i += 2) {
    if (primes[i]) {
      for (let j = i * i; j < bound; j += i) {
        primes[j] = 0;
      }
    }
  }

  // Iterating through the array
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      let curr = String(primes[i]);
      let tmp = 1; // tmp variable to hold the no of rotations
      for (let x = rotate(curr); x != curr; x = rotate(x)) {
        if (x > n && primes[x]) {
          continue;
        }
        else if (!primes[x]) {
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
