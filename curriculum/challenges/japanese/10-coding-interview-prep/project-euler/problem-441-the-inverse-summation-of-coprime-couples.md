---
id: 5900f5261000cf542c510038
title: '問題 441: 互いに素な組の逆数の総和'
challengeType: 1
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

整数 $M$ について、以下の条件をすべて満たすすべての整数対 $p$, $q$ に対する $\frac{1}{p·q}$ の和を$R(M)$ と定義します。

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ と $q$ は互いに素である。

$2 ≤ i ≤ N$ のとき、$R(i)$ の和を $S(N)$ と定義します。

$S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ and $S(100) ≈ 58.2962$ であることを確認できます。

$S({10}^7)$ を求めなさい。 回答は、四捨五入して小数第 4 位まで示すこと。

# --hints--

`inverseSummationCoprimeCouples()` は `5000088.8395` を返す必要があります。

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function inverseSummationCoprimeCouples() {

  return true;
}

inverseSummationCoprimeCouples();
```

# --solutions--

```js
// solution required
```
