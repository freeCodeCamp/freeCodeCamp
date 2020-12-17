---
id: 5900f3911000cf542c50fea4
title: 问题37：可截断的素数
challengeType: 5
videoUrl: ''
---

# --description--

3797号有一个有趣的财产。作为素数本身，可以从左到右连续删除数字，并在每个阶段保持素数：3797,797,97和7.同样，我们可以从右到左工作：3797,379,37和3。找到从左到右和从右到左都可截断的唯一n（8 &lt;= n &lt;= 11）个素数之和。注意：2,3,5和7不被认为是可截断的素数。

# --hints--

`truncatablePrimes(8)`应该返回1986年。

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)`应该返回5123。

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)`应该返回8920。

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)`应该返回748317。

```js
assert(truncatablePrimes(11) == 748317);
```

# --solutions--

