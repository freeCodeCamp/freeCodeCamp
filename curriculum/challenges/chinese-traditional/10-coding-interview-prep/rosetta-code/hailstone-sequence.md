---
id: 595608ff8bcd7a50bd490181
title: Hailstone sequence
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

Hailstone 數字序列可以從一個起始正整數 `n` 生成：

- If `n` is `1` then the sequence ends
- If `n` is `even` then the next `n` of the sequence `= n/2`
- If `n` is `odd` then the next `n` of the sequence `= (3 * n) + 1`

The (unproven) Collatz conjecture is that the hailstone sequence for any starting number always terminates.

The hailstone sequence is also known as hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud), or as the Collatz sequence.

# --instructions--

1. Create a routine to generate the hailstone sequence for a number
2. Your function should return an array with the number less than `limit` which has the longest hailstone sequence and that sequence's length. (But don't show the actual sequence!)

# --hints--

`hailstoneSequence` 應該是一個函數。

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` should return an array.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` should return `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` should return `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` should return `[77031, 351]`.

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
