---
id: 5900f3d71000cf542c50fee9
title: '问题 106：特殊子集和：元测试'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Let $S(A)$ represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. $S(B) ≠ S(C)$; that is, sums of subsets cannot be equal.
2. 如果 B 包含的元素多于 C，则 $S(B) > S(C)$。

对于这个问题，我们假设给定的集合包含 n 个严格递增的元素，并且它已经满足第二条规则。

令人惊讶的是，在可以从 n = 4 的集合中获得的 25 个可能的子集对中，这些对中只有 1 个需要进行相等性测试（第一条规则）。 类似地，当 n = 7 时，966 个子集对中只有 70 个需要测试。

对于 n = 12，可以获得的 261625 个子集对中有多少需要进行相等性测试？

**注意：** 此问题与问题 103 和问题 105 相关。

# --hints--

`subsetSumsMetaTesting()` 应该返回 `21384`。

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
