---
id: 5900f3731000cf542c50fe86
challengeType: 5
title: 'Problem 7: 10001st prime'
forumTopicId: 302182
---

## Description
<section id='description'>

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the `n`th prime number?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nthPrime(6)</code> should return a number.
    testString: assert(typeof nthPrime(6) === 'number');
  - text: <code>nthPrime(6)</code> should return 13.
    testString: assert.strictEqual(nthPrime(6), 13);
  - text: <code>nthPrime(10)</code> should return 29.
    testString: assert.strictEqual(nthPrime(10), 29);
  - text: <code>nthPrime(100)</code> should return 541.
    testString: assert.strictEqual(nthPrime(100), 541);
  - text: <code>nthPrime(1000)</code> should return 7919.
    testString: assert.strictEqual(nthPrime(1000), 7919);
  - text: <code>nthPrime(10001)</code> should return 104743.
    testString: assert.strictEqual(nthPrime(10001), 104743);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nthPrime(n) {

  return true;
}

nthPrime(10001);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const nthPrime = n => {
  let pN = 2;
  let step = 0;
  while (step < n) {
    let isPrime = true;
    let rootN = Math.sqrt(pN);
    for (let i = 2; i <= rootN; i++) {
      if (!(pN % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? step++ : '';
    pN++;
  }
  return pN - 1;
}
```

</section>
