---
id: 5900f3b61000cf542c50fec8
title: 关卡 73：区间内的分数个数
challengeType: 5
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

考虑形如 `n`/`d` 的分数，其中 n 和 d 均为正整数。如果 `n`&lt;`d`，且其最大公约数 HCF(`n`,`d`)=1，则该分数被称为最简真分数。

如果我们将 `d` ≤ 8 的最简真分数构成的集合按大小升序列出，将得到：

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, <strong>3/8</strong>, <strong>2/5</strong>, <strong>3/7</strong>, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

可以看出在 1/3 和 1/2 之间有3个分数。

将 `d` ≤ 12,000 的最简真分数构成的集合排序后，在 1/3 和 1/2 之间有多少个分数？

# --hints--

`countingFractionsInARange()` 应该返回一个数字。

```js
assert(typeof countingFractionsInARange() === 'number');
```

`countingFractionsInARange()` 应该返回 7295372。

```js
assert.strictEqual(countingFractionsInARange(), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange() {

  return true;
}

countingFractionsInARange();
```

# --solutions--

```js
// solution required
```
