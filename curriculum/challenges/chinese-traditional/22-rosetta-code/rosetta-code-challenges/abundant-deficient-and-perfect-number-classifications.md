---
id: 594810f028c0303b75339acd
title: '豐富的、不足的和完善的數字分類'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

These define three classifications of positive integers based on their proper divisors.

令 $P(n)$ 是 `n` 的真除數之和，其中真除數是指除 `n` 本身之外的所有正整數 `n`。

如果 `P(n) < n` 那麼 `n` 被歸類爲 `deficient`

如果 `P(n) === n` 那麼 `n` 被歸類爲 `perfect`

如果 `P(n) > n` 那麼 `n` 被歸類爲 `abundant`

**示例：** `6` 具有真除數 `1`、`2` 和 `3`。 `1 + 2 + 3 = 6`，所以 `6` 被歸類爲一個完全數。

# --instructions--

實現一個函數，計算從 `1` 到 `num`（含）的整數中有多少在三個類中的每一個。 將結果輸出爲數組，格式如下 `[deficient, perfect, abundant]`。

# --hints--

`getDPA` 應該是一個函數。

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` 應該返回一個數組。

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` 返回數組的長度應爲 `3`。

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` 應該返回 `[3758, 3, 1239]`。

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` 應該返回 `[7508, 4, 2488]`。

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` 應該返回 `[15043, 4, 4953]`。

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

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
