---
id: 5900f54b1000cf542c51005d
title: '問題 479: 根の増大'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

式 $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$ の 3 つの解 (実数または複素数) を、$a_k$, $b_k$, $c_k$ で表します。

例えば $k = 5$ の場合、$\\{a_5, b_5, c_5\\}$ は約 $\\{5.727244, -0.3622 + 2.057397i, -0.363622 - 2.057397i\\}$ であることが分かります。

$1 ≤ p, k ≤ n$ を満たすすべての整数 $p$, $k$ に対して、$S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ と定義します。

興味深いことに、$S(n)$ は常に整数です。 例えば、$S(4) ≈ 51\\,160$ です。

$S({10}^6) \text{ mod } 1\\,000\\,000\\,007$ を求めなさい。

# --hints--

`rootsOnTheRise()` は `191541795` を返す必要があります。

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
