---
id: 5900f3831000cf542c50fe96
challengeType: 5
title: 'Problem 23: Non-abundant sums'
---

## Description
<section id='description'>
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number <var>n</var> is called deficient if the sum of its proper divisors is less than <var>n</var> and it is called abundant if this sum exceeds <var>n</var>.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all positive integers <= <var>n</var> which cannot be written as the sum of two abundant numbers.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.
    testString: 'assert(sumOfNonAbundantNumbers(10000) === 3731004, "<code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.");'
  - text: <code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.
    testString: 'assert(sumOfNonAbundantNumbers(15000) === 4039939, "<code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.");'
  - text: <code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.
    testString: 'assert(sumOfNonAbundantNumbers(20000) === 4159710, "<code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.");'
  - text: <code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.
    testString: 'assert(sumOfNonAbundantNumbers(28123) === 4179871, "<code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfNonAbundantNumbers(n) {
  // Good luck!
  return n;
}

sumOfNonAbundantNumbers(28123);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
