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
- 如果 `n` 是 `even`，則序列的下一個 `n` `= n/2`
- 如果 `n` 是 `odd`，則序列的下一個 `n` `= (3 * n) + 1`

（未經證實的）科拉茨猜想是任何起始數字的冰雹序列總是終止。

冰雹序列也稱爲冰雹數（因爲這些值通常像雲中的冰雹一樣受到多次下降和上升的影響），或稱爲 Collat​​z 序列。

# --instructions--

1. Create a routine to generate the hailstone sequence for a number
2. 你的函數應該返回一個小於 `limit` 的數組，它具有最長的冰雹序列和該序列的長度。 （但不要顯示實際序列！）

# --hints--

`hailstoneSequence` 應該是一個函數。

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` 應該返回一個數組。

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` 應該返回 `[27, 112]`。

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` 應該返回 `[35655, 324]`。

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` 應該返回 `[77031, 351]`。

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
