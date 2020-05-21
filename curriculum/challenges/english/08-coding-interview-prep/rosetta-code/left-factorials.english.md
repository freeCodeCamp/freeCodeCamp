---
id: 5a23c84252665b21eecc7ee0
title: Left factorials
challengeType: 5
isHidden: false
forumTopicId: 302302
---

## Description

<section id='description'>
<b>Left factorials</b>,  $ !n $,  may refer to either  <i>subfactorials</i>  or to  <i>factorial sums</i>. The same notation can be confusingly seen used for the two different definitions. Sometimes,  <i>subfactorials</i>  (also known as <i>derangements</i>)  may use any of the notations:
<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>
(It may not be visually obvious, but the last example uses an upside-down exclamation mark.) This task will be using this formula for <b>left factorial</b>:
$ !n = \sum_{k=0}^{n-1} k! $
where $!0 = 0$
</section>

## Instructions

<section id='instructions'>
Write a function to calculate the left factorial of a given number.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>leftFactorial</code> should be a function.
    testString: assert(typeof leftFactorial == 'function');
  - text: <code>leftFactorial(0)</code> should return a number.
    testString: assert(typeof leftFactorial(0) == 'number');
  - text: <code>leftFactorial(0)</code> should return <code>0</code>.
    testString: assert.equal(leftFactorial(0), 0);
  - text: <code>leftFactorial(1)</code> should return <code>1</code>.
    testString: assert.equal(leftFactorial(1), 1);
  - text: <code>leftFactorial(2)</code> should return <code>2</code>.
    testString: assert.equal(leftFactorial(2), 2);
  - text: <code>leftFactorial(3)</code> should return <code>4</code>.
    testString: assert.equal(leftFactorial(3), 4);
  - text: <code>leftFactorial(10)</code> should return <code>409114</code>.
    testString: assert.equal(leftFactorial(10), 409114);
  - text: <code>leftFactorial(17)</code> should return <code>22324392524314</code>.
    testString: assert.equal(leftFactorial(17), 22324392524314);
  - text: <code>leftFactorial(19)</code> should return <code>6780385526348314</code>.
    testString: assert.equal(leftFactorial(19), 6780385526348314);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function leftFactorial(n) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```

</section>
