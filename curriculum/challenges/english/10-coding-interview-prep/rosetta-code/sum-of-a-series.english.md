---
id: 5a23c84252665b21eecc8041
title: Sum of a series
challengeType: 5
isHidden: false
forumTopicId: 302333
---

## Description

<section id='description'>

Compute the <b>n</b><sup>th</sup> term of a <a href="https://en.wikipedia.org/wiki/Series (mathematics)" target="_blank">series</a>, i.e. the sum of the <b>n</b> first terms of the corresponding <a href="https://en.wikipedia.org/wiki/sequence" target="_blank">sequence</a>.
Informally this value, or its limit when <b>n</b> tends to infinity, is also called the <i>sum of the series</i>, thus the title of this task.
For this task, use:
<span style="margin-left: 2em;">$S_n = \sum_{k=1}^n \frac{1}{k^2}$</span>
and compute $S_{1000}$
This approximates the <a href="https://en.wikipedia.org/wiki/Riemann zeta function" target="_blank">zeta function</a> for S=2, whose exact value
<span style="margin-left: 2em;">$\zeta(2) = {\pi^2\over 6}$</span>
is the solution of the <a href="https://en.wikipedia.org/wiki/Basel problem" target="_blank">Basel problem</a>.

</section>

## Instructions

<section id='instructions'>

Write a function that take $a$ and $b$ as parameters and returns the sum of $a^{th}$ to $b^{th}$ members of the sequence.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>sum</code> should be a function.
    testString: assert(typeof sum == 'function');
  - text: <code>sum(1, 100)</code> should return a number.
    testString: assert(typeof sum(1, 100) == 'number');
  - text: <code>sum(1, 100)</code> should return <code>1.6349839001848923</code>.
    testString: assert.equal(sum(1, 100), 1.6349839001848923);
  - text: <code>sum(33, 46)</code> should return <code>0.009262256361481223</code>.
    testString: assert.equal(sum(33, 46), 0.009262256361481223);
  - text: <code>sum(21, 213)</code> should return <code>0.044086990748706555</code>.
    testString: assert.equal(sum(21, 213), 0.044086990748706555);
  - text: <code>sum(11, 111)</code> should return <code>0.08619778593108679</code>.
    testString: assert.equal(sum(11, 111), 0.08619778593108679);
  - text: <code>sum(1, 10)</code> should return <code>1.5497677311665408</code>.
    testString: assert.equal(sum(1, 10), 1.5497677311665408);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function sum(a, b) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```

</section>
