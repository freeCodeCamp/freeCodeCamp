---
id: 594810f028c0303b75339acd
title: '丰富的、不足的和完善的数字分类'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

These define three classifications of positive integers based on their proper divisors.

令 $P(n)$ 是 `n` 的真除数之和，其中真除数是指除 `n` 本身之外的所有正整数 `n`。

如果 `P(n) < n` 那么 `n` 被归类为 `deficient`

如果 `P(n) === n` 那么 `n` 被归类为 `perfect`

如果 `P(n) > n` 那么 `n` 被归类为 `abundant`

**示例：** `6` 具有真除数 `1`、`2` 和 `3`。 `1 + 2 + 3 = 6`，所以 `6` 被归类为一个完全数。

# --instructions--

实现一个函数，计算从 `1` 到 `num`（含）的整数中有多少在三个类中的每一个。 将结果输出为数组，格式如下 `[deficient, perfect, abundant]`。

# --hints--

`getDPA` 应该是一个函数。

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` 应该返回一个数组。

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` 返回数组的长度应为 `3`。

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` 应该返回 `[3758, 3, 1239]`。

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` 应该返回 `[7508, 4, 2488]`。

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` 应该返回 `[15043, 4, 4953]`。

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
