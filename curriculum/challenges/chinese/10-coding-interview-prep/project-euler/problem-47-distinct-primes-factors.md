---
id: 5900f39c1000cf542c50feae
title: 问题47：不同的素数因素
challengeType: 5
videoUrl: ''
---

# --description--

前两个连续数字有两个不同的素数因子是：

14 = 2×7

15 = 3×5

前三个连续数字有三个不同的素因子：

644 =2²×7×23

645 = 3×5×43

646 = 2×17×19

找到前四个连续的整数，每个整数有四个不同的素数因子。这些数字中的第一个是什么？

# --hints--

`distinctPrimeFactors(2, 2)`应该返回14。

```js
assert.strictEqual(distinctPrimeFactors(2, 2), 14);
```

`distinctPrimeFactors(3, 3)`应该返回644。

```js
assert.strictEqual(distinctPrimeFactors(3, 3), 644);
```

`distinctPrimeFactors(4, 4)`应该返回134043。

```js
assert.strictEqual(distinctPrimeFactors(4, 4), 134043);
```

# --solutions--

