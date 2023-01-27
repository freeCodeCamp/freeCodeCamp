---
id: 5900f4b21000cf542c50ffc5
title: '問題 326: 剰余の総和 (Modulo Summation)'
challengeType: 1
forumTopicId: 301983
dashedName: problem-326-modulo-summations
---

# --description--

Let $a_n$ be a sequence recursively defined by: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$.

したがって、$a_n$ の最初の 10 項は 1, 1, 0, 3, 0, 3, 5, 4, 1, 9 です。

次の条件を満たす対 $(p, q)$ の個数を $f(N, M)$ とします。

$$ 1 \le p \le q \le N \\; \text{かつ} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

$f(10, 10) = 4 であることが分かります。(3,3), (5,5), (7,9), (9,10) の 4 対です。

さらに、$f({10}^4, {10}^3) = 97\\,158$ が与えられます。

$f({10}^{12}, {10}^6)$ を求めなさい。

# --hints--

`moduloSummations()` は `1966666166408794400` を返す必要があります。

```js
assert.strictEqual(moduloSummations(), 1966666166408794400);
```

# --seed--

## --seed-contents--

```js
function moduloSummations() {

  return true;
}

moduloSummations();
```

# --solutions--

```js
// solution required
```
