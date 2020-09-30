---
id: 5900f39d1000cf542c50feb0
challengeType: 5
title: 'Problem 49: Prime permutations'
forumTopicId: 302159
---

## Description
<section id='description'>

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primePermutations()</code> should return a number.
    testString: assert(typeof primePermutations() === 'number');
  - text: <code>primePermutations()</code> should return 296962999629.
    testString: assert.strictEqual(primePermutations(), 296962999629);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primePermutations() {

  return true;
}

primePermutations();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function primePermutations() {
  function arePermutations(num1, num2) {
    const numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
      return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
      const index = numStr2.indexOf(numStr1[i]);
      if (index === -1) {
        return false;
      }
      numStr2 = numStr2.slice(0, index) + numStr2.slice(index + 1);
    }
    return true;
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let num1 = 1000; num1 <= 9999; num1++) {
    const num2 = num1 + 3330;
    const num3 = num2 + 3330;
    if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
      if (arePermutations(num1, num2) && arePermutations(num1, num3)
        && num1 !== 1487) {
        // concatenate and return numbers
        return (num1 * 100000000) + (num2 * 10000) + num3;
      }
    }
  }
  return 0;
}
```

</section>
