---
id: 5900f4c81000cf542c50ffd9
title: 问题347：最大整数可被两个素数整除
challengeType: 5
videoUrl: ''
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

只能被素数2和3整除的最大整数≤100是96，因为96 = 32 \* 3 = 25 \* 3。对于两个不同的素数p和q，令M（p，q，N）是最大的正整数≤N，只能被p和q整除，并且如果不存在这样的正整数，则M（p，q，N）= 0。

例如M（2,3,100）= 96。 M（3,5,100）= 75而不是90因为90可以被2,3和5整除。另外M（2,73,100）= 0因为不存在可以被2和73整除的正整数≤100。

设S（N）为所有不同M（p，q，N）的和。 S（100）= 2262。

找到S（10 000 000）。

# --hints--

`euler347()`应该返回11109800204052。

```js
assert.strictEqual(euler347(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function euler347() {

  return true;
}

euler347();
```

# --solutions--

```js
// solution required
```
