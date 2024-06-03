---
id: 5a23c84252665b21eecc7e03
title: 累积标准差
challengeType: 1
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

Suppose that the entire population of interest is eight students in a particular class. For a finite set of numbers, the population standard deviation is found by taking the square root of the average of the squared deviations of the values subtracted from their average value. The marks of a class of eight students (that is, a statistical population) are the following eight values:

$2, 4, 4, 4, 5, 5, 7, 9$

这八个数据点的平均值为5。

$$\mu ={\frac {2+4+4+4+5+5+7+9}{8}}={\frac {40}{8}}=5$$

首先，计算每个数据点与平均值的偏差，并求每个结果的平方

| Deviations of each data | 平方结果                 |
| ----------------------- | -------------------- |
| $(2-5)^{2}=(-3)^{2}=9$  | $(5-5)^{2}=0^{2}=0$  |
| $(4-5)^{2}=(-1)^{2}=1$  | $(5-5)^{2}=0^{2}=0$  |
| $(4-5)^{2}=(-1)^{2}=1$  | $(7-5)^{2}=2^{2}=4$  |
| $(4-5)^{2}=(-1)^{2}=1$  | $(9-5)^{2}=4^{2}=16$ |

方差是这些数值的平均值。

$$\sigma ^{2}={\frac {9+1+1+1+0+0+4+16}{8}}={\frac {32}{8}}=4$$

而且人口标准差等于方差的平方根。

$$\sigma ={\sqrt {4}}=2$$

编写一个函数，该函数将一个数组作为参数并返回该序列的 <a href="https://rosettacode.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer nofollow">标准差</a>。

# --hints--

`standardDeviation` 应该是一个函数。

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` 应该返回一个数字。

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` 应该返回 `2`。

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` 应该返回 `147.323`。

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` 应该返回 `18.239`。

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` 应该返回 `16.87`。

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` 应该返回 `22.631`。

```js
assert.equal(
  standardDeviation([
    271,
    354,
    296,
    301,
    333,
    326,
    285,
    298,
    327,
    316,
    287,
    314
  ]),
  22.631
);
```

# --seed--

## --seed-contents--

```js
function standardDeviation(arr) {

}
```

# --solutions--

```js
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  });

  var std_dev = Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
  return Math.round(std_dev * 1000) / 1000;
}
```
