---
id: 5900f3df1000cf542c50fef1
title: '问题 115：计数块组合 II'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

一排长度为 `n` 个单位的行上放置了最小长度为 `m` 个单位的红色块，这样任何两个红色块（允许长度不同）至少被一个黑色方块隔开。

让填充计数函数，$F(m, n)$，表示可以填充的行数。

例如， $F(3, 29) = 673135$，$F(3, 30) = 1089155$。

就是说，对于 m = 3，可以看出 n = 30 是函数结果超过 100 万的最小 n 值。

同样，对于 m = 10，可以验证 $F(10, 56) = 880711$ 和 $F(10, 57) = 1148904$。即函数第一次超过 100 万的 n 最小值为 57。

对于 m = 50，找到最小值 `n` 的值，让函数第一次超过 100 万。

**注意：** 这是问题 114 的一个困难版本。

# --hints--

`countingBlockTwo()` 应该返回 `168`。

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
