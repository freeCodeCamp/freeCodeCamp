---
id: 5900f3d61000cf542c50fee7
title: '問題 103：特殊子集和：最優'
challengeType: 1
forumTopicId: 301727
dashedName: problem-103-special-subset-sums-optimum
---

# --description--

Let $S(A)$ represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

1. $S(B) ≠ S(C)$; that is, sums of subsets cannot be equal.
2. 如果 B 包含的元素多於 C，則 $S(B) > S(C)$。

對於給定的數字 n，我們稱使得 $S(A)$ 最小的集合 A 爲最優特殊和集。 下面給出前五個最優特殊和集。

$$\begin{align}   & n = 1: \\{1\\} \\\\
  & n = 2: \\{1, 2\\} \\\\   & n = 3: \\{2, 3, 4\\} \\\\
  & n = 4: \\{3, 5, 6, 7\\} \\\\   & n = 5: \\{6, 9, 11, 12, 13\\} \\\\
\end{align}$$

由上述規律可以猜測，似乎對於一個給定的最優特殊和集 $A = \\{a_1, a_2, \ldots, a_n\\}$，下一個最優特殊和集將會是 $B = \\{b, a_1 + b, a_2 + b, \ldots, a_n + b\\}$，其中 b 是集合 A 的“中間”元素。

通過上述“規則”，我們猜測當 $n = 6$ 時，最優特殊和集應爲 $A = \\{11, 17, 20, 22, 23, 24\\}$，且 $S(A) = 117$。 然而，這不是最優集合，因爲我們只是應用了一種算法來提供接近最優的集合。 $n = 6$ 的最佳集合是 $A = \\{11, 18, 19, 20, 22, 25\\}$，其中 $S(A) = 115$ 和對應的集合字符串：`111819202225`。

假設 A 是 $n = 7$ 的最優特殊和集，找到它的集合串。

**注意：** 此問題與問題 105 和問題 106 相關。

# --hints--

`optimumSpecialSumSet()` 應該返回字符串 `20313839404245`。

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
