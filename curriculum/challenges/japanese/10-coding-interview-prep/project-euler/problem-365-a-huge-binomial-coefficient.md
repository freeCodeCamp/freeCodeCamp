---
id: 5900f4da1000cf542c50ffec
title: '問題 365: 巨大な二項係数'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

二項係数 $\displaystyle\binom{{10}^{18}}{{10}^9}$ は 90 億 ($9 × {10}^9$) 桁を超える数です。

$M(n, k, m)$ を、二項係数 $\displaystyle\binom{n}{k}$ mod $m$ とします。

素数 $p$, $q$, $r$ が $1000 &lt; p &lt; q &lt; r &lt; 5000$ を満たすとき、$\sum M({10}^{18}, {10}^9, p \times q \times r)$ を求めなさい。

# --hints--

`hugeBinomialCoefficient()` は `162619462356610300` を返す必要があります。

```js
assert.strictEqual(hugeBinomialCoefficient(), 162619462356610300);
```

# --seed--

## --seed-contents--

```js
function hugeBinomialCoefficient() {

  return true;
}

hugeBinomialCoefficient();
```

# --solutions--

```js
// solution required
```
