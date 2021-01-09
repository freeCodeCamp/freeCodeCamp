---
id: 5900f3b41000cf542c50fec7
title: '关卡 72：分数计数'
challengeType: 5
forumTopicId: 302185
---

# --description--

考虑形如 `n`/`d` 的分数，其中 n 和 d 均为正整数。如果 `n`&lt;`d`，且最大公约数 HCF(`n`,`d`)=1，则该分数被称为最简真分数。

如果我们将 `d` ≤ 8 的最简真分数构成的集合按大小升序列出，将得到：

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

可以看出该集合中共有 21 个元素。

求 `d` ≤ 1,000,000 的最简真分数构成的集合中共有多少个元素。

# --hints--

`countingFractions()` 应该返回一个数字。

```js
assert(typeof countingFractions() === 'number');
```

`countingFractions()` 应该返回 303963552391。

```js
assert.strictEqual(countingFractions(), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions() {

  return true;
}

countingFractions();
```

# --solutions--

```js
// solution required
```
