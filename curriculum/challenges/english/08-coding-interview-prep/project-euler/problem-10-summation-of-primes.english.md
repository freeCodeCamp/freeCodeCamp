---
id: 5900f3761000cf542c50fe89
challengeType: 5
title: 'Problem 10: Summation of primes'
---

## Description
<section id='description'>
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below n.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeSummation(17)</code> should return 41.
    testString: 'assert.strictEqual(primeSummation(17), 41, ''<code>primeSummation(17)</code> should return 41.'');'
  - text: <code>primeSummation(2001)</code> should return 277050.
    testString: 'assert.strictEqual(primeSummation(2001), 277050, ''<code>primeSummation(2001)</code> should return 277050.'');'
  - text: <code>primeSummation(140759)</code> should return 873608362.
    testString: 'assert.strictEqual(primeSummation(140759), 873608362, ''<code>primeSummation(140759)</code> should return 873608362.'');'
  - text: <code>primeSummation(2000000)</code> should return 142913828922.
    testString: 'assert.strictEqual(primeSummation(2000000), 142913828922, ''<code>primeSummation(2000000)</code> should return 142913828922.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeSummation(n) {
  // Good luck!
  return true;
}

primeSummation(2000000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
//noprotect
function primeSummation(n) {
  // Initialise an array containing only prime numbers
  let primes = [2];
  let result = 2;

  function isPrime(y, primes) {
    // Find sqrt(y)
    const sqrt = Math.floor(Math.sqrt(y));

    // Divide y by each applicable prime, return false if any of them divide y
    for (let i = 0; i < primes.length && primes[i] <= sqrt; i++) {
      if (y % primes[i] === 0) {
        return false;
      }
    }

    // At this point x must be prime
    return true;
  }

  // For every odd integer, add it to the array if it is prime
  for (let x = 3; x < n; x += 2) {
    if (isPrime(x, primes)) {
      if (x > n) {
        return result;
      } else {
        result += x;
        primes.push(x);
      }
    }
  }

  return result;
}
```

</section>
