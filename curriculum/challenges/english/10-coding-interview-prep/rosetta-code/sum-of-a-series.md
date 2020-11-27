---
id: 5a23c84252665b21eecc8041
title: Sum of a series
challengeType: 5
forumTopicId: 302333
---

## Description

<section id='description'>

Compute the **n**<sup>th</sup> term of a [series](<https://en.wikipedia.org/wiki/Series (mathematics)>), i.e. the sum of the **n** first terms of the corresponding [sequence](https://en.wikipedia.org/wiki/sequence). Informally this value, or its limit when **n** tends to infinity, is also called the *sum of the series*, thus the title of this task. For this task, use: $S*n = \\sum*{k=1}^n \\frac{1}{k^2}$ and compute $S\_{1000}$ This approximates the [zeta function](<https://en.wikipedia.org/wiki/Riemann zeta function>) for S=2, whose exact value $\\zeta(2) = {\\pi^2\\over 6}$ is the solution of the [Basel problem](<https://en.wikipedia.org/wiki/Basel problem>).

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
