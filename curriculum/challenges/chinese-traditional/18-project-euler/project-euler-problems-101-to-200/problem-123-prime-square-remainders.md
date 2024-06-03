---
id: 5900f3e71000cf542c50fefa
title: '問題 123：素數平方餘數'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

Let $p_n$ be the $n$th prime: 2, 3, 5, 7, 11, ..., and let $r$ be the remainder when ${(p_n−1)}^n + {(p_n+1)}^n$ is divided by ${p_n}^2$.

例如，當 $n = 3, p_3 = 5$，$4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$。

餘數超過 $10^9$ 的 $n$ 的最小值是 7037。

求餘數超過 $10^{10}$ 時的 $n$ 的最小值。

# --hints--

`primeSquareRemainders()` 應該返回 `21035`。

```js
assert.strictEqual(primeSquareRemainders(), 21035);
```

# --seed--

## --seed-contents--

```js
function primeSquareRemainders() {

  return true;
}

primeSquareRemainders();
```

# --solutions--

```js
// solution required
```
