---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
challengeType: 5
---

## Description
<section id='description'>
<p>These define three classifications of positive integers based on their <a href="http://rosettacode.org/wiki/Proper divisors" title="Proper divisors">proper divisors</a>.</p>
<p>Let $P(n)$ be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.</p>
<p>If <code>P(n) < n</code> then n is classed as "deficient"</p>
<p>If <code>P(n) === n</code> then n is classed as "perfect"</p>
<p>If <code>P(n) > n</code> then n is classed as "abundant"</p>
<p>Example:</p>
<p>6 has proper divisors of 1, 2, and 3.</p>
<p>1 + 2 + 3 = 6, so 6 is classed as a perfect number.</p>
<p>Implement a function that calculates how many of the integers from 1 to 20,000 (inclusive) are in each of the three classes. Output the result as an array in the following format <code>[deficient, perfect, abundant]</code>.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> is a function.
    testString: 'assert(typeof getDPA === ''function'', ''<code>getDPA</code> is a function.'');'
  - text: <code>getDPA</code> should return an array.
    testString: 'assert(Array.isArray(getDPA(100)), ''<code>getDPA</code> should return an array.'');'
  - text: <code>getDPA</code> return value should have a length of 3.
    testString: 'assert(getDPA(100).length === 3, ''<code>getDPA</code> return value should have a length of 3.'');'
  - text: '<code>getDPA(20000)</code> should equal [15043, 4, 4953]'
    testString: 'assert.deepEqual(getDPA(20000), solution, ''<code>getDPA(20000)</code> should equal [15043, 4, 4953]'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA (num) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function getDPA (num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}

```

</section>
