---
id: 5900f3871000cf542c50fe9a
challengeType: 5
isHidden: false
title: 'Problem 27: Quadratic primes'
forumTopicId: 301919
---

## Description
<section id='description'>

Euler discovered the remarkable quadratic formula:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

It turns out that the formula will produce 40 primes for the consecutive integer values $0 \le n \le 39$. However, when $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ is divisible by 41, and certainly when $n = 41, 41^2 + 41 + 41$ is clearly divisible by 41.

The incredible formula $n^2 - 79n + 1601$ was discovered, which produces 80 primes for the consecutive values $0 \le n \le 79$. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, where $|a| < range$ and $|b| \le range$<br>
  where $|n|$ is the modulus/absolute value of $n$<br>
  e.g. $|11| = 11$ and $|-4| = 4$<br>
</div>

Find the product of the coefficients, $a$ and $b$, for the quadratic expression that produces the maximum number of primes for consecutive values of $n$, starting with $n = 0$.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quadraticPrimes(200)</code> should return a number.
    testString: assert(typeof quadraticPrimes(200) === 'number');
  - text: <code>quadraticPrimes(200)</code> should return -4925.
    testString: assert(quadraticPrimes(200) == -4925);
  - text: <code>quadraticPrimes(500)</code> should return -18901.
    testString: assert(quadraticPrimes(500) == -18901);
  - text: <code>quadraticPrimes(800)</code> should return -43835.
    testString: assert(quadraticPrimes(800) == -43835);
  - text: <code>quadraticPrimes(1000)</code> should return -59231.
    testString: assert(quadraticPrimes(1000) == -59231);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quadraticPrimes(range) {
  // Good luck!
  return range;
}

quadraticPrimes(1000);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
