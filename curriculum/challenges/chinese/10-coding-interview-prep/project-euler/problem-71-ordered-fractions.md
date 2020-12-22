---
id: 5900f3b31000cf542c50fec6
title: '关卡 71：有序分数'
challengeType: 5
forumTopicId: 302184
---

# --description--

考虑形如 `n`/`d` 的分数，其中 `n` 和 `d` 均为正整数。如果 `n`&lt;`d`，且最大公约数 HCF(`n`,`d`)=1，则该分数被称为最简真分数。

如果我们将 `d` ≤ 8 的最简真分数构成的集合按大小升序列出，将得到：

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, <strong>2/5</strong>, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

可以看出 2/5 是 3/7 的直接左邻的分数。

将所有 `d` ≤ 1,000,000 的最简真分数按大小升序排列，求此时 3/7 直接左邻的分数的分子。

# --hints--

`orderedFractions()` 应该返回一个数字。

```js
assert(typeof orderedFractions() === 'number');
```

`orderedFractions()` 应该返回 428570。

```js
assert.strictEqual(orderedFractions(), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions() {

  return true;
}

orderedFractions();
```

# --solutions--

```js
// solution required
```
