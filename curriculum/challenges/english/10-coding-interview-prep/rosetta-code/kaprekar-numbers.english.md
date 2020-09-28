---
id: 5a23c84252665b21eecc7eca
title: Kaprekar numbers
challengeType: 5
forumTopicId: 302296
---

## Description

<section id='description'>
A positive integer is a <a href="https://en.wikipedia.org/wiki/Kaprekar number">Kaprekar number</a> if:
<ul>
  <li>It is 1, or,</li>
  <li>The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number. </li>
</ul>
Note that a split resulting in a part consisting purely of 0s is not valid, as 0 is not considered positive.Example
Kaprekar numbers:
<ul>
  <li><code>2223</code> is a Kaprekar number, as <code>2223 * 2223 = 4941729</code>, <code>4941729</code> may be split to <code>494</code> and <code>1729</code>, and <code>494 + 1729 = 2223</code></li>
  <li>The series of Kaprekar numbers is known as <a href="https://oeis.org/A006886" target="_blank">A006886</a>, and begins as <code>1, 9, 45, 55, ...</code></li>
</ul>
</section>

## Instructions

<section id='instructions'>
Write a function that takes a number $n$, a base $bs$, and returns true if the number is a Kaprekar number for the given base. Otherwise, the function returns false.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>isKaprekar</code> should be a function.
    testString: assert(typeof isKaprekar == 'function');
  - text: <code>isKaprekar(1, 10)</code> should return a boolean.
    testString: assert(typeof isKaprekar(1, 10) == 'boolean');
  - text: <code>isKaprekar(1, 10)</code> should return <code>true</code>.
    testString: assert.equal(isKaprekar(1, 10), true);
  - text: <code>isKaprekar(9, 10)</code> should return <code>true</code>.
    testString: assert.equal(isKaprekar(9, 10), true);
  - text: <code>isKaprekar(2223, 10)</code> should return <code>true</code>.
    testString: assert.equal(isKaprekar(2223, 10), true);
  - text: <code>isKaprekar(22823, 10)</code> should return <code>false</code>.
    testString: assert.equal(isKaprekar(22823, 10), false);
  - text: <code>isKaprekar(9, 17)</code> should return <code>false</code>.
    testString: assert.equal(isKaprekar(9, 17), false);
  - text: <code>isKaprekar(225, 17)</code> should return <code>true</code>.
    testString: assert.equal(isKaprekar(225, 17), true);
  - text: <code>isKaprekar(999, 17)</code> should return <code>false</code>.
    testString: assert.equal(isKaprekar(999, 17), false);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
  <div id='js-seed'>

```js
function isKaprekar(n, bs) {

}
```

  </div>
</section>

## Solution

<section id='solution'>

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```

</section>
