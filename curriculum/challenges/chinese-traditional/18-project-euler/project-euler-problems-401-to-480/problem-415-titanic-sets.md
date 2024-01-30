---
id: 5900f50c1000cf542c51001e
title: '問題415：泰坦尼克集合'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

A set of lattice points $S$ is called a titanic set if there exists a line passing through exactly two points in $S$.

一個泰坦尼克號集合的例子： $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$，其中穿過 (0, 1) 和 (2, 0) 的線不會穿過 $S$ 上其他任何點。

反之，集合{(0, 0), (1, 1), (2, 2), (4, 4)} 不是泰坦尼克集合，因爲其中穿過任何兩個點的線都會穿過另外兩個點。

對於任何正整數 $N$ 的，設 $T(N)$ 爲泰坦尼克號集合 $S$ 的數量，集合中每個點 ($x$, $y$) 滿足 $0 ≤ x$, $y ≤ N$. 可以確認 $T(1) = 11$, $T(2) = 494$, $T(4) = 33\\,554\\,178$, $T(111)\bmod {10}^8 = 13\\,500\\,401$ and $T({10}^5)\bmod {10}^8 = 63\\,259\\,062$。

算出 $T({10}^{11})\bmod {10}^8$。

# --hints--

`titanicSets()` 應該返回 `55859742`。

```js
assert.strictEqual(titanicSets(), 55859742);
```

# --seed--

## --seed-contents--

```js
function titanicSets() {

  return true;
}

titanicSets();
```

# --solutions--

```js
// solution required
```
