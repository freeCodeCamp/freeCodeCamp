---
id: 595668ca4cfe1af2fb9818d4
title: Harshad 或 Niven 系列
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.

例如，`42` 是一个 Harshad 数，因为 `42` 可以被 `(4 + 2)` 整除而没有余数。

假设该系列被定义为按递增顺序排列的数字。

# --instructions--

实现一个函数来生成 Harshad 序列的连续成员。

使用它返回一个包含十个序列成员的数组，从大于 `n` 的第一个 Harshad 数开始。

# --hints--

`isHarshadOrNiven` 应该是一个函数。

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` 应该返回 `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` 应该返回 `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` 应该返回 `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
