---
id: 5900f3fd1000cf542c50ff10
title: '问题 145：有多少个小于十亿的可逆数？'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

一些正整数 $n$ 满足如下性质：该数与其逆序数之和 [ $n + reverse(n)$ ] 全部由奇数（十进制）组成。 例如，$36 + 63 = 99$ 和 $409 + 904 = 1313$。 我们称这些数字是可逆的；所以 36、63、409 和 904 均为可逆的。 无论是 $n$ 还是 $reverse(n)$ 均不允许出现前导零。

小于一千的可逆数有 120 个。

请求出有多少个小于十亿（${10}^9$）的可逆数？

# --hints--

`reversibleNumbers()` 应该返回 `608720`。

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
