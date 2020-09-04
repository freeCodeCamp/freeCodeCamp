---
id: 5ea2815a8640bcc6cb7dab3c
title: Lychrel numbers
challengeType: 5
forumTopicId: 385287
---

## Description
<section id='description'>
<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>Form the next number <code>n</code> of the series by reversing <code>n₀</code> and adding it to <code>n₀</code></li>
  <li>Stop when <code>n</code> becomes palindromic - i.e. the digits of <code>n</code> in reverse order == <code>n</code>.</li>
</ol>

The above recurrence relation when applied to most starting numbers `n` = 1, 2, ... terminates in a palindrome quite quickly.

For example if `n₀` = 12 we get:

```bash
12
12 + 21 = 33,  a palindrome!
```

And if `n₀` = 55 we get:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

Notice that the check for a palindrome happens <i>after</i> an addition.

Some starting numbers seem to go on forever; the recurrence relation for 196 has been calculated for millions of repetitions forming numbers with millions of digits, without forming a palindrome. These numbers that do not end in a palindrome are called <b>Lychrel numbers</b>.

For the purposes of this task a Lychrel number is any starting number that does not form a palindrome within 500 (or more) iterations.

<strong>Seed and related Lychrel numbers:</strong>

Any integer produced in the sequence of a Lychrel number is also a Lychrel number.

In general, any sequence from one Lychrel number <i>might</i> converge to join the sequence from a prior Lychrel number candidate; for example the sequences for the numbers 196 and then 689 begin:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

So we see that the sequence starting with 689 converges to, and continues with the same numbers as that for 196.

Because of this we can further split the Lychrel numbers into true <b>Seed</b> Lychrel number candidates, and <b>Related</b> numbers that produce no palindromes but have integers in their sequence seen as part of the sequence generated from a lower Lychrel number.

</section>

## Instructions

<section id='instructions'>
Write a function that takes a number as a parameter. Return true if the number is a Lynchrel number. Otherwise, return false. Remember that the iteration limit is 500.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>isLychrel</code> should be a function.
    testString: assert(typeof isLychrel === 'function');
  - text: <code>isLychrel(12)</code> should return a boolean.
    testString: assert(typeof isLychrel(12) === 'boolean');
  - text: <code>isLychrel(12)</code> should return <code>false</code>.
    testString: assert.equal(isLychrel(12), false);
  - text: <code>isLychrel(55)</code> should return <code>false</code>.
    testString: assert.equal(isLychrel(55), false);
  - text: <code>isLychrel(196)</code> should return <code>true</code>.
    testString: assert.equal(isLychrel(196), true);
  - text: <code>isLychrel(879)</code> should return <code>true</code>.
    testString: assert.equal(isLychrel(879), true);
  - text: <code>isLychrel(44987)</code> should return <code>false</code>.
    testString: assert.equal(isLychrel(44987), false);
  - text: <code>isLychrel(7059)</code> should return <code>true</code>.
    testString: assert.equal(isLychrel(7059), true);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLychrel(n) {

}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```

</section>
