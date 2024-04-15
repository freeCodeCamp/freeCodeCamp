---
id: 5900f3d61000cf542c50fee7
title: '问题 103：特殊子集和：最优'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

Let $S(A)$ represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. $S(B) ≠ S(C)$; that is, sums of subsets cannot be equal.
2. 如果 B 包含的元素多于 C，则 $S(B) > S(C)$。

对于给定的数字 n，我们称使得 $S(A)$ 最小的集合 A 为最优特殊和集。 下面给出前五个最优特殊和集。

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

由上述规律可以猜测，似乎对于一个给定的最优特殊和集 $A = \\{a_1, a_2, \ldots, a_n\\}$，下一个最优特殊和集将会是 $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$，其中 b 是集合 A 的“中间”元素。

通过上述“规则”，我们猜测当 $n = 6$ 时，最优特殊和集应为 $A = \\{11, 17, 20, 22, 23, 24\\}$，且 $S(A) = 117$。 然而，这不是最优集合，因为我们只是应用了一种算法来提供接近最优的集合。 $n = 6$ 的最佳集合是 $A = \\{11, 18, 19, 20, 22, 25\\}$，其中 $S(A) = 115$ 和对应的集合字符串：`111819202225`。

假设 A 是 $n = 7$ 的最优特殊和集，找到它的集合串。

**注意：** 此问题与问题 105 和问题 106 相关。

# --hints--

`optimumSpecialSumSet()` 应该返回字符串 `20313839404245`。

```js
assert.strictEqual(optimumSpecialSumSet(), '20313839404245');
```

# --seed--

## --seed-contents--

```js
function optimumSpecialSumSet() {

  return true;
}

optimumSpecialSumSet();
```

# --solutions--

```js
// solution required
```
