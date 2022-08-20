---
id: 5900f5271000cf542c51003a
title: '問題 443: 最大公約数の数列'
challengeType: 1
forumTopicId: 302115
dashedName: problem-443-gcd-sequence
---

# --description--

次のように定義される数列を $g(n)$ とします。

$$\begin{align}   & g(4) = 13, \\\\
  & n > 4 \text{ のとき、} g(n) = g(n-1) + gcd(n, g(n - 1)) \end{align}$$

最初のいくつかの値は次のようになります。

$$\begin{array}{l}   n    & 4  & 5  & 6  & 7  & 8  & 9  & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & \ldots \\\\
  g(n) & 13 & 14 & 16 & 17 & 18 & 27 & 28 & 29 & 30 & 31 & 32 & 33 & 34 & 51 & 54 & 55 & 60 & \ldots \end{array}$$

$g(1\\,000) = 2\\,524$, $g(1\\,000\\,000) = 2\\,624\\,152$ が与えられます。

$g({10}^{15})$ を求めなさい。

# --hints--

`gcdSequence()` は `2744233049300770` を返す必要があります。

```js
assert.strictEqual(gcdSequence(), 2744233049300770);
```

# --seed--

## --seed-contents--

```js
function gcdSequence() {

  return true;
}

gcdSequence();
```

# --solutions--

```js
// solution required
```
