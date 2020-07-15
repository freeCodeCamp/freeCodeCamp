---
id: 5900f39c1000cf542c50feae
challengeType: 5
isHidden: false
title: 'Problem 47: Distinct primes factors'
forumTopicId: 302145
---

## Description
<section id='description'>

The first two consecutive numbers to have two distinct prime factors are:

<div style='padding-left: 4em;'>
  14 = 2 × 7<br>
  15 = 3 × 5
</div>

The first three consecutive numbers to have three distinct prime factors are:

<div style='padding-left: 4em;'>
  644 = 2<sup>2</sup> × 7 × 23<br>
  645 = 3 × 5 × 43<br>
  646 = 2 × 17 × 19
</div>

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>distinctPrimeFactors(2, 2)</code> should return a number.
    testString: assert(typeof distinctPrimeFactors(2, 2) === 'number');
  - text: <code>distinctPrimeFactors(2, 2)</code> should return 14.
    testString: assert.strictEqual(distinctPrimeFactors(2, 2), 14);
  - text: <code>distinctPrimeFactors(3, 3)</code> should return 644.
    testString: assert.strictEqual(distinctPrimeFactors(3, 3), 644);
  - text: <code>distinctPrimeFactors(4, 4)</code> should return 134043.
    testString: assert.strictEqual(distinctPrimeFactors(4, 4), 134043);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  // Good luck!
  return true;
}

distinctPrimeFactors(4, 4);
```

</div>

</section>

## Solution
<section id='solution'>

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  function numberOfPrimeFactors(n) {
    let factors = 0;

    //  Considering 2 as a special case
    let firstFactor = true;
    while (n % 2 == 0) {
      n = n / 2;
      if (firstFactor) {
        factors++;
        firstFactor = false;
      }
    }
    // Adding other factors
    for (let i = 3; i < Math.sqrt(n); i += 2) {
      firstFactor = true;
      while (n % i == 0) {
        n = n / i;
        if (firstFactor) {
          factors++;
          firstFactor = false;
        }
      }
    }

    if (n > 1) { factors++; }

    return factors;
  }

  let number = 0;
  let consecutive = 0;

  while (consecutive < targetConsecutive) {
    number++;
    if (numberOfPrimeFactors(number) >= targetNumPrimes) {
      consecutive++;
    } else {
      consecutive = 0;
    }
  }
  return number - targetConsecutive + 1;
}
```

</section>
