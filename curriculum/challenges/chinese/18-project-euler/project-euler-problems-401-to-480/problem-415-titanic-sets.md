---
id: 5900f50c1000cf542c51001e
title: '问题415：泰坦尼克集合'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

A set of lattice points $S$ is called a titanic set if there exists a line passing through exactly two points in $S$.

一个泰坦尼克号集合的例子： $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$，其中穿过 (0, 1) 和 (2, 0) 的线不会穿过 $S$ 上其他任何点。

反之，集合{(0, 0), (1, 1), (2, 2), (4, 4)} 不是泰坦尼克集合，因为其中穿过任何两个点的线都会穿过另外两个点。

对于任何正整数 $N$ 的，设 $T(N)$ 为泰坦尼克号集合 $S$ 的数量，集合中每个点 ($x$, $y$) 满足 $0 ≤ x$, $y ≤ N$. 可以确认 $T(1) = 11$, $T(2) = 494$, $T(4) = 33\\,554\\,178$, $T(111)\bmod {10}^8 = 13\\,500\\,401$ and $T({10}^5)\bmod {10}^8 = 63\\,259\\,062$。

算出 $T({10}^{11})\bmod {10}^8$。

# --hints--

`titanicSets()` 应该返回 `55859742`。

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
