---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
---

## Description
<section id='description'>
<p>A happy number is defined by the following process:</p>
<p>Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.</p>
<p>Implement a function that returns true if the number is happy, or false if not.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>happy</code> is a function.
  testString: 'assert(typeof happy === "function", "<code>happy</code> is a function.");'
- text: <code>happy(1)</code> should return a boolean.
  testString: 'assert(typeof happy(1) === "boolean", "<code>happy(1)</code> should return a boolean.");'
- text: <code>happy(1)</code> should return true.
  testString: 'assert(happy(1), "<code>happy(1)</code> should return true.");'
- text: <code>happy(2)</code> should return false.
  testString: 'assert(!happy(2), "<code>happy(2)</code> should return false.");'
- text: <code>happy(7)</code> should return true.
  testString: 'assert(happy(7), "<code>happy(7)</code> should return true.");'
- text: <code>happy(10)</code> should return true.
  testString: 'assert(happy(10), "<code>happy(10)</code> should return true.");'
- text: <code>happy(13)</code> should return true.
  testString: 'assert(happy(13), "<code>happy(13)</code> should return true.");'
- text: <code>happy(19)</code> should return true.
  testString: 'assert(happy(19), "<code>happy(19)</code> should return true.");'
- text: <code>happy(23)</code> should return true.
  testString: 'assert(happy(23), "<code>happy(23)</code> should return true.");'
- text: <code>happy(28)</code> should return true.
  testString: 'assert(happy(28), "<code>happy(28)</code> should return true.");'
- text: <code>happy(31)</code> should return true.
  testString: 'assert(happy(31), "<code>happy(31)</code> should return true.");'
- text: '<code>happy(32)</code> should return true:.'
  testString: 'assert(happy(32), "<code>happy(32)</code> should return true:.");'
- text: <code>happy(33)</code> should return false.
  testString: 'assert(!happy(33), "<code>happy(33)</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function happy (number) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}

```

</section>
