---
title: Evaluate binomial coefficients
id: 598de241872ef8353c58a7a2
challengeType: 5
---

## Description
<section id='description'>
<p>Write a function to calculate the binomial coefficient for the given value of n and k.</p><p>This formula is recommended:</p>
$\binom{n}{k} = \frac{n!}{(n-k)!k!} = \frac{n(n-1)(n-2)\ldots(n-k+1)}{k(k-1)(k-2)\ldots 1}$
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>binom</code> is a function.
  testString: 'assert(typeof binom === ''function'', ''<code>binom</code> is a function.'');'
- text: '<code>binom(5,3)</code> should return 10.'
  testString: 'assert.equal(binom(5, 3), 10, ''<code>binom(5,3)</code> should return 10.'');'
- text: '<code>binom(7,2)</code> should return 21.'
  testString: 'assert.equal(binom(7, 2), 21, ''<code>binom(7,2)</code> should return 21.'');'
- text: '<code>binom(10,4)</code> should return 210.'
  testString: 'assert.equal(binom(10, 4), 210, ''<code>binom(10,4)</code> should return 210.'');'
- text: '<code>binom(6,1)</code> should return 6.'
  testString: 'assert.equal(binom(6, 1), 6, ''<code>binom(6,1)</code> should return 6.'');'
- text: '<code>binom(12,8)</code> should return 495.'
  testString: 'assert.equal(binom(12, 8), 495, ''<code>binom(12,8)</code> should return 495.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function binom (n, k) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function binom(n, k) {
  let coeff = 1;
  for (let i = n - k + 1; i <= n; i++) coeff *= i;
  for (let i = 1; i <= k; i++) coeff /= i;
  return coeff;
}

```

</section>
