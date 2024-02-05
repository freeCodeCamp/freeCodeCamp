---
id: 5900f3ee1000cf542c50ff00
title: '問題 130: 素数レピュニットの性質を持つ合成数'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

1 のみで構成される数はレピュニット数と呼ばれます。 ここでは、長さ $k$ のレピュニット数を $R(k)$ と定義します。例えば、$R(6) = 111111$ です。

$n$ を正の整数とし、$GCD(n, 10) = 1$ が与えられる場合、$R(k)$ が $n$ で割り切れるような値 $k$ が必ず存在することを証明できます。また、そのような $k$ の最小値を $A(n)$ とします。例えば、$A(7) = 6$, $A(41) = 5$ です。

すべての素数 $p > 5$ について、$p − 1$ は $A(p)$ で割り切れるとします。 例えば、$p = 41 のとき、A(41) = 5$ であり、40 は 5 で割り切れます。

しかし、これが当てはまる合成数もまれに存在し、最初の 5 例は 91, 259, 451, 481, 703 です。

$GCD(n, 10) = 1$ であり、$n − 1$ が $A(n)$ で割り切れるような合成数 $n$ について、その最初の 25 個の総和を求めなさい。

# --hints--

`compositeRepunit()` は `149253` を返す必要があります。

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```
