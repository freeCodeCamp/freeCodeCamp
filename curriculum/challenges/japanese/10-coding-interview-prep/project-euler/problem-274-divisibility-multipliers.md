---
id: 5900f47f1000cf542c50ff91
title: '問題 274: 整除乗数'
challengeType: 1
forumTopicId: 301924
dashedName: problem-274-divisibility-multipliers
---

# --description--

10 と互いに素な整数 $p > 1$ のそれぞれについて、任意の正の整数 $n$ の $p$ での整除性が次の関数に対しても維持されるような、正の整除乗数 (divisibility multiplier) $m &lt; p$ が存在します。

$f(n) = (\\; n {\text{の最下位の桁以外すべて}) + (\\; n \text{の最下位の桁}) \times m$

つまり、$m$ が $p$ の整除乗数である場合、$f(n) が $p$ で整除できるための必要十分条件は $n$ が $p$ で整除できることです。

($n$ が $p$よりもはるかに大きい場合、$f(n)$ は $n$ よりも小さくなり、$f$ を繰り返し適用することで $p$ の乗法整除性を検証できます。)

例えば、113 の 整除乗数は 34 です。

$f(76275) = 7627 + 5 \times 34 = 7797$: 76275 と 77977 はいずれも 113 で割り切れます。

$f(12345) = 1234 + 5 \times 34 = 1404$: 12345 と 14047 はいずれも 113 で割り切れません。

10 と互いに素な 1000 未満の素数の、整除乗数の和は 39517 です。 10 と互いに素な ${10}^7$ 未満の素数の、整除乗数の和を求めなさい。

# --hints--

`divisibilityMultipliers()` は `1601912348822` を返す必要があります。

```js
assert.strictEqual(divisibilityMultipliers(), 1601912348822);
```

# --seed--

## --seed-contents--

```js
function divisibilityMultipliers() {

  return true;
}

divisibilityMultipliers();
```

# --solutions--

```js
// solution required
```
