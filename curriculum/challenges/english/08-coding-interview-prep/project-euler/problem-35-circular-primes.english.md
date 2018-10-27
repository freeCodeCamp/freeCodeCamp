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
const circularPrimes = (n) => {
  const primeCheck = (num) => {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let count = 1;
  for (let i = 1; i < n; i += 2) {
    if (primeCheck(i)) {
      let flag = true;
      let circularNum = i.toString();
      for (let j = 1; j < i.toString().length; j++) {
        circularNum = circularNum.substring(1) + circularNum.substring(0, 1);
        if (primeCheck(Number(circularNum)) === false) {
          flag = false;
          break;
        }
      }
      if (flag) {
        count++;
      }
    }
  }
  return count;
};
```

</section>
