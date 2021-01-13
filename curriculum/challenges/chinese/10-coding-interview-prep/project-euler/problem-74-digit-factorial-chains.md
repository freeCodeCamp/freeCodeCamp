---
id: 5900f3b61000cf542c50fec9
title: 问题74：数字因子链
challengeType: 5
videoUrl: ''
dashedName: problem-74-digit-factorial-chains
---

# --description--

数字145是众所周知的，其数字的阶乘之和等于145：1！ + 4！ + 5！ = 1 + 24 + 120 = 145也许知名度较低的是169，因为它产生了最长的数字链，可以链接到169;事实证明，只存在三个这样的循环：169→363601→1454→169 871→45361→871 872→45362→872不难证明每个起始编号最终都会陷入循环。例如，69→363600→1454→169→363601（→1454）78→45360→871→45361（→871）540→145（→145）从69开始产生五个非重复项链，但最长起始数低于一百万的非重复链是60个项。起始数低于一百万的链中有多少个包含正好六十个非重复项？

# --hints--

`euler74()`应返回402。

```js
assert.strictEqual(euler74(), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains() {

  return true;
}

digitFactorialChains();
```

# --solutions--

```js
// solution required
```
