---
id: 5900f37a1000cf542c50fe8d
title: 'Problem 14: Longest Collatz sequence'
challengeType: 5
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

The following iterative sequence is defined for the set of positive integers:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> is even)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> is odd)</div>

Using the rule above and starting with 13, we generate the following sequence:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given `limit`, produces the longest chain?

**Note:** Once the chain starts the terms are allowed to go above one million.

# --hints--

`longestCollatzSequence(14)` should return a number.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` should return 9.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` should return 3711.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` should return 35655.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` should return 52527.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` should return 77031.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` should return 837799.

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
