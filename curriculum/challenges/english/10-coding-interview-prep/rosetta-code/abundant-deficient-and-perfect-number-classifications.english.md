---
title: 'Abundant, deficient and perfect number classifications'
id: 594810f028c0303b75339acd
challengeType: 5
isHidden: false
forumTopicId: 302221
---

## Description
<section id='description'>
These define three classifications of positive integers based on their <a href='https://rosettacode.org/wiki/Proper divisors' title='Proper divisors' target='_blank'>proper divisors</a>.
Let $P(n)$ be the sum of the proper divisors of <code>n</code> where proper divisors are all positive integers <code>n</code> other than <code>n</code> itself.

If <code>P(n) < n</code> then <code>n</code> is classed as <code>deficient</code>

If <code>P(n) === n</code> then <code>n</code> is classed as <code>perfect</code>

If <code>P(n) > n</code> then <code>n</code> is classed as <code>abundant</code>

<strong>Example</strong>:
<code>6</code> has proper divisors of <code>1</code>, <code>2</code>, and <code>3</code>.
<code>1 + 2 + 3 = 6</code>, so <code>6</code> is classed as a perfect number.
</section>

## Instructions
<section id='instructions'>
Implement a function that calculates how many of the integers from <code>1</code> to <code>20,000</code> (inclusive) are in each of the three classes. Output the result as an array in the following format <code>[deficient, perfect, abundant]</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDPA</code> should be a function.
    testString: assert(typeof getDPA === 'function');
  - text: <code>getDPA</code> should return an array.
    testString: assert(Array.isArray(getDPA(100)));
  - text: <code>getDPA</code> return value should have a length of 3.
    testString: assert(getDPA(100).length === 3);
  - text: <code>getDPA(20000)</code> should equal [15043, 4, 4953]
    testString: assert.deepEqual(getDPA(20000), solution);

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
function getDPA(num) {
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
