---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
forumTopicId: 302280
---

## Description
<section id='description'>
A <a href="https://en.wikipedia.org/wiki/Happy_number" target="_blank">happy number</a> is defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals <code>1</code> (where it will stay), or it loops endlessly in a cycle which does not include <code>1</code>. Those numbers for which this process ends in <code>1</code> are happy numbers, while those that do not end in <code>1</code> are unhappy numbers.
</section>

## Instructions
<section id='instructions'>
Implement a function that returns true if the number is happy, or false if not.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>happy</code> should be a function.
    testString: assert(typeof happy === 'function');
  - text: <code>happy(1)</code> should return a boolean.
    testString: assert(typeof happy(1) === 'boolean');
  - text: <code>happy(1)</code> should return true.
    testString: assert(happy(1));
  - text: <code>happy(2)</code> should return false.
    testString: assert(!happy(2));
  - text: <code>happy(7)</code> should return true.
    testString: assert(happy(7));
  - text: <code>happy(10)</code> should return true.
    testString: assert(happy(10));
  - text: <code>happy(13)</code> should return true.
    testString: assert(happy(13));
  - text: <code>happy(19)</code> should return true.
    testString: assert(happy(19));
  - text: <code>happy(23)</code> should return true.
    testString: assert(happy(23));
  - text: <code>happy(28)</code> should return true.
    testString: assert(happy(28));
  - text: <code>happy(31)</code> should return true.
    testString: assert(happy(31));
  - text: <code>happy(32)</code> should return true:.
    testString: assert(happy(32));
  - text: <code>happy(33)</code> should return false.
    testString: assert(!happy(33));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function happy(number) {

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
