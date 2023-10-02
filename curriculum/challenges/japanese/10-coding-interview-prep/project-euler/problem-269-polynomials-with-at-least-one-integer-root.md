---
id: 5900f4791000cf542c50ff8c
title: '問題 269: 少なくとも 1 つの整数根を持つ多項式'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

多項式 $P(x)$ の根すなわち零点とは、式 $P(x) = 0$ の解です。

$P_n$ を多項式として定義し、その係数を $n$ の各位とします。

例えば、$P_{5703}(x) = 5x^3 + 7x^2 + 3$ です。

次のことが分かります。

- $P_n(0)$ は $n$ の最下位の数字である。
- $P_n(1)$ は $n$ の各位の和である。
- $Pn(10)$ は $n$ そのものである。

多項式 $P_n$ が少なくとも 1 つの整数根 (integer root) を持つような $k$ 以下の正の整数 $n$ の個数を、$Z(k)$とします。

$Z(100\\,000)$ が 14696 であることを確認できます。

$Z({10}^{16})$ を求めなさい。

# --hints--

`polynomialsWithOneIntegerRoot()` は `1311109198529286` を返す必要があります。

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
