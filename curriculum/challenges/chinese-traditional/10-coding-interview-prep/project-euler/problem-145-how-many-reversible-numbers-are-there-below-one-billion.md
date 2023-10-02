---
id: 5900f3fd1000cf542c50ff10
title: '問題 145：有多少個小於十億的可逆數？'
challengeType: 1
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

一些正整數 $n$ 滿足如下性質：該數與其逆序數之和 [ $n + reverse(n)$ ] 全部由奇數（十進制）組成。 例如，$36 + 63 = 99$ 和 $409 + 904 = 1313$。 我們稱這些數字是可逆的；所以 36、63、409 和 904 均爲可逆的。 無論是 $n$ 還是 $reverse(n)$ 均不允許出現前導零。

小於一千的可逆數有 120 個。

請求出有多少個小於十億（${10}^9$）的可逆數？

# --hints--

`reversibleNumbers()` 應該返回 `608720`。

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
