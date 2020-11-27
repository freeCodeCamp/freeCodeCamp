---
id: 595608ff8bcd7a50bd490181
title: Hailstone sequence
challengeType: 5
forumTopicId: 302279
---

# --description--

The Hailstone sequence of numbers can be generated from a starting positive integer, `n` by:

<ul>
  <li>If <code>n</code> is <code>1</code> then the sequence ends</li>
  <li>If <code>n</code> is <code>even</code> then the next <code>n</code> of the sequence <code>= n/2</code></li>
  <li>If <code>n</code> is <code>odd</code> then the next <code>n</code> of the sequence <code>= (3 * n) + 1</code></li>
</ul>

The (unproven) [Collatz conjecture](<https://en.wikipedia.org/wiki/Collatz conjecture> "wp: Collatz conjecture") is that the hailstone sequence for any starting number always terminates.

The hailstone sequence is also known as hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud), or as the Collatz sequence.

# --instructions--

<ol>
  <li>Create a routine to generate the hailstone sequence for a number</li>
  <li>Use the routine to show that the hailstone sequence for the number 27 has 112 elements starting with <code>27, 82, 41, 124</code> and ending with <code>8, 4, 2, 1</code></li>
  <li>Show the number less than 100,000 which has the longest hailstone sequence together with that sequence's length. (But don't show the actual sequence!)</li>
</ol>

**See also:**

<ul>
  <li><a href='https://xkcd.com/710' target='_blank'>xkcd</a> (humourous).</li>
</ul>

# --hints--

`hailstoneSequence` should be a function.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence()` should return `[[27,82,41,124,8,4,2,1], [351, 77031]]`

```js
assert.deepEqual(hailstoneSequence(), res);
```

# --seed--

## --after-user-code--

```js
const res = [[27, 82, 41, 124, 8, 4, 2, 1], [351, 77031]];
```

## --seed-contents--

```js
function hailstoneSequence() {
  const res = [];


  return res;
}
```

# --solutions--

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
