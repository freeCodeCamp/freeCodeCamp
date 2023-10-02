---
id: 5900f4af1000cf542c50ffc1
title: '問題 322: 10 で割り切れる二項係数'
challengeType: 1
forumTopicId: 301979
dashedName: problem-322-binomial-coefficients-divisible-by-10
---

# --description--

$n ≤ i &lt; m$ ($i$, $m$, $n$ は正の整数) のとき、10 で割り切れる二項係数 ${}^iC_n$ の数を $T(m, n)$ とします。

$T({10}^9, {10}^7 - 10) = 989\\,697\\,000$ が与えられます。

$T({10}^{18}, {10}^{12} - 10)$ を求めなさい。

# --hints--

`binomialCoefficientsDivisibleBy10()` は `999998760323314000` を返す必要があります。

```js
assert.strictEqual(binomialCoefficientsDivisibleBy10(), 999998760323314000);
```

# --seed--

## --seed-contents--

```js
function binomialCoefficientsDivisibleBy10() {

  return true;
}

binomialCoefficientsDivisibleBy10();
```

# --solutions--

```js
// solution required
```
