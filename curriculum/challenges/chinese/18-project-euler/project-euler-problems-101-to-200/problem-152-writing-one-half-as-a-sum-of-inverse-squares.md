---
id: 5900f4041000cf542c50ff17
title: '问题152：将一半写为倒数平方和'
challengeType: 1
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

There are several ways to write the number $\frac{1}{2}$ as a sum of inverse squares using distinct integers.

例如，可以使用数字{2,3,4,5,7,12,15,20,28,35}：

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

In fact, only using integers between 2 and 45 inclusive, there are exactly three ways to do it, the remaining two being: {2,3,4,6,7,9,10,20,28,35,36,45} and {2,3,4,6,7,9,12,15,28,30,35,36,45}.

使用 2 到 80 之间（含 2 和 80）的不同整数，有多少种方法可以将数字 $\frac{1}{2}$ 写成倒数平方和？

# --hints--

`sumInverseSquares()` 应该返回 `301`。

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```
