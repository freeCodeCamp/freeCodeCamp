---
id: 5900f4311000cf542c50ff44
title: 问题197：研究递归定义的序列的行为
challengeType: 5
videoUrl: ''
---

# --description--

给定函数f（x）=⌊230.403243784-x2⌋×10-9（⌊⌊是floor函数），序列un由u0 = -1和un + 1 = f（un）定义。

找到n + 1012的un + un + 1.在小数点后面给出9位数的答案。

# --hints--

`euler197()`应该返回1.710637717。

```js
assert.strictEqual(euler197(), 1.710637717);
```

# --solutions--

