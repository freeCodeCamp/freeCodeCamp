---
id: 595608ff8bcd7a50bd490181
title: Hailstone sequence
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

The Hailstone sequence of numbers can be generated from a starting positive integer, `n` by:

- If `n` is `1` then the sequence ends
- 如果 `n` 是 `even`，则序列的下一个 `n` `= n/2`
- 如果 `n` 是 `odd`，则序列的下一个 `n` `= (3 * n) + 1`

（未经证实的）科拉茨猜想是任何起始数字的冰雹序列总是终止。

冰雹序列也称为冰雹数（因为这些值通常像云中的冰雹一样受到多次下降和上升的影响），或称为 Collat​​z 序列。

# --instructions--

1. Create a routine to generate the hailstone sequence for a number
2. 你的函数应该返回一个小于 `limit` 的数组，它具有最长的冰雹序列和该序列的长度。 （但不要显示实际序列！）

# --hints--

`hailstoneSequence` 应该是一个函数。

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` 应该返回一个数组。

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` 应该返回 `[27, 112]`。

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` 应该返回 `[35655, 324]`。

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` 应该返回 `[77031, 351]`。

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
