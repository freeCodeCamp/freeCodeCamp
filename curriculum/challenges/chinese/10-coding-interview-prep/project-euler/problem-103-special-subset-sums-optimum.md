---
id: 5900f3d61000cf542c50fee7
title: '问题 103：特殊子集和：最优'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

设 $S(A)$ 是大小为 n 的集合 A 中所有元素之和。 若任取集合 A 中任意两个非空且没有交集的集合 B 和 C，满足下列两个条件，那么我们就称集合 A 为特殊的和集：

1. $S(B) ≠ S(C)$; 即任意子集所有元素的和均不相同。
2. 如果集合 B 中的元素个数多于集合 C，那么 $S(B) > S(C)$。

对于给定的数字 n，我们称使得 $S(A)$ 最小的集合 A 为最优特殊和集。 下面给出前五个最优特殊和集。

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

由上述规律可以猜测，似乎对于一个给定的最优特殊和集 $A = \\{a_1, a_2, \ldots, a_n\\}$，下一个最优特殊和集将会是 $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$，其中 b 是集合 A 的“中间”元素。

通过上述“规则”，我们猜测当 $n = 6$ 时，最优特殊和集应为 $A = \\{11, 17, 20, 22, 23, 24\\}$，且 $S(A) = 117$。 However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for $n = 6$ is $A = \\{11, 18, 19, 20, 22, 25\\}$, with $S(A) = 115$ and corresponding set string: `111819202225`.

Given that A is an optimum special sum set for $n = 7$, find its set string.

**Note:** This problem is related to Problem 105 and Problem 106.

# --hints--

`optimumSpecialSumSet()` should return the string `20313839404245`.

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
