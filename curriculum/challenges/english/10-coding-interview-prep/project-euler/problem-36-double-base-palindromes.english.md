---
id: 5900f3901000cf542c50fea3
challengeType: 5
isHidden: false
title: 'Problem 36: Double-base palindromes'
forumTopicId: 302020
---

## Description
<section id='description'>

The decimal number, 585 = 1001001001<sub>2</sub> (binary), is palindromic in both bases.

Find the sum of all numbers, less than `n`, whereas 1000 ≤ `n` ≤ 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>doubleBasePalindromes(1000)</code> should return a number.
    testString: assert(typeof doubleBasePalindromes(1000) === 'number');
  - text: <code>doubleBasePalindromes(1000)</code> should return 1772.
    testString: assert(doubleBasePalindromes(1000) == 1772);
  - text: <code>doubleBasePalindromes(50000)</code> should return 105795.
    testString: assert(doubleBasePalindromes(50000) == 105795);
  - text: <code>doubleBasePalindromes(500000)</code> should return 286602.
    testString: assert(doubleBasePalindromes(500000) == 286602);
  - text: <code>doubleBasePalindromes(1000000)</code> should return 872187.
    testString: assert(doubleBasePalindromes(1000000) == 872187);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function doubleBasePalindromes(n) {
  // Good luck!
  return n;
}

doubleBasePalindromes(1000000);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
