---
id: 5900f3d71000cf542c50fee9
title: '問題 106：特殊子集和：元測試'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Let $S(A)$ represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. $S(B) ≠ S(C)$; that is, sums of subsets cannot be equal.
2. 如果 B 包含的元素多於 C，則 $S(B) > S(C)$。

對於這個問題，我們假設給定的集合包含 n 個嚴格遞增的元素，並且它已經滿足第二條規則。

令人驚訝的是，在可以從 n = 4 的集合中獲得的 25 個可能的子集對中，這些對中只有 1 個需要進行相等性測試（第一條規則）。 類似地，當 n = 7 時，966 個子集對中只有 70 個需要測試。

對於 n = 12，可以獲得的 261625 個子集對中有多少需要進行相等性測試？

**注意：** 此問題與問題 103 和問題 105 相關。

# --hints--

`subsetSumsMetaTesting()` 應該返回 `21384`。

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
