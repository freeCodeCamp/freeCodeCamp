---
title: Hailstone sequence
id: 595608ff8bcd7a50bd490181
challengeType: 5
forumTopicId: 302279
---

## Description
<section id='description'>
The Hailstone sequence of numbers can be generated from a starting positive integer, <code>n</code> by:
<ul>
  <li>If <code>n</code> is <code>1</code> then the sequence ends</li>
  <li>If <code>n</code> is <code>even</code> then the next <code>n</code> of the sequence <code>= n/2</code></li>
  <li>If <code>n</code> is <code>odd</code> then the next <code>n</code> of the sequence <code>= (3 * n) + 1</code></li>
</ul>
The (unproven) <a href="https://en.wikipedia.org/wiki/Collatz conjecture" title="wp: Collatz conjecture" target="_blank">Collatz conjecture</a> is that the hailstone sequence for any starting number always terminates.
The hailstone sequence is also known as hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud), or as the Collatz sequence.
</section>

## Instructions
<section id='instructions'>
<ol>
  <li>Create a routine to generate the hailstone sequence for a number</li>
  <li>Use the routine to show that the hailstone sequence for the number 27 has 112 elements starting with <code>27, 82, 41, 124</code> and ending with <code>8, 4, 2, 1</code></li>
  <li>Show the number less than 100,000 which has the longest hailstone sequence together with that sequence's length. (But don't show the actual sequence!)</li>
</ol>
<strong>See also:</strong>
<ul>
  <li><a href="https://xkcd.com/710" target="_blank">xkcd</a> (humourous).</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hailstoneSequence</code> should be a function.
    testString: assert(typeof hailstoneSequence === 'function');
  - text: <code>hailstoneSequence()</code> should return <code>[[27,82,41,124,8,4,2,1], [351, 77031]]</code>
    testString: assert.deepEqual(hailstoneSequence(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hailstoneSequence() {
  const res = [];


  return res;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const res = [[27, 82, 41, 124, 8, 4, 2, 1], [351, 77031]];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function hailstoneSequence () {
  const res = [];

  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  const h = hailstone(27);
  const hLen = h.length;
  res.push([...h.slice(0, 4), ...h.slice(hLen - 4, hLen)]);

  let n = 0;
  let max = 0;
  for (let i = 100000; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }
  res.push([max, n]);

  return res;
}

```

</section>
