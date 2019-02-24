---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
challengeType: 5
---

## Description
<section id='description'>
These define three classifications of positive integers based on their <a href="http://rosettacode.org/wiki/Proper divisors" title="Proper divisors">proper divisors</a>.
Let $P(n)$ be the sum of the proper divisors of <b>n</b> where proper divisors are all positive integers <b>n</b> other than <b>n</b> itself.
<pre>
If <code style='border: 1px solid #ddd;'> P(n) < n </code> then <b>n</b> is classed as <b>deficient</b>
If <code style='border: 1px solid #ddd;'> P(n) === n </code> then <b>n</b> is classed as <b>perfect</b>
If <code style='border: 1px solid #ddd;'> P(n) > n </code> then <b>n</b> is classed as <b>abundant</b>
</pre>
Example:
<b>6</b> has proper divisors of <b>1</b>, <b>2</b>, and <b>3</b>.
<b>1 + 2 + 3 = 6</b>, so <b>6</b> is classed as a perfect number.
Implement a function that calculates how many of the integers from <b>1</b> to <b>20,000</b> (inclusive) are in each of the three classes. Output the result as an array in the following format <code>[deficient, perfect, abundant]</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> is a function.
    testString: assert(typeof getDPA === 'function', '<code>getDPA</code> is a function.');
  - text: <code>getDPA</code> should return an array.
    testString: assert(Array.isArray(getDPA(100)), '<code>getDPA</code> should return an array.');
  - text: <code>getDPA</code> return value should have a length of 3.
    testString: assert(getDPA(100).length === 3, '<code>getDPA</code> return value should have a length of 3.');
  - text: <code>getDPA(20000)</code> should equal [15043, 4, 4953]
    testString: assert.deepEqual(getDPA(20000), solution, '<code>getDPA(20000)</code> should equal [15043, 4, 4953]');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDPA(num) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const solution = [15043, 4, 4953];
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
