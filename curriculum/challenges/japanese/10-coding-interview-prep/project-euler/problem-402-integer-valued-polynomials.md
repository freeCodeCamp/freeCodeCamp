---
id: 5900f4ff1000cf542c510011
title: '問題 402: 整数値多項式'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

すべての整数 $n$ について、多項式 $n^4 + 4n^3 + 2n^2 + 5n$ が 6 の倍数であることが分かっています。 また、このような性質を持つ最大の整数が 6 であることも分かっています。

$n^4 + an^3 + bn^2 + cn$ がすべての整数 $n$ について $m$ の倍数となるような最大の $m$ を、$M(a, b, c)$ とします。 例えば、$M(4, 2, 5) = 6$ です。

また、$0 &lt; a, b, c ≤ N$ のとき、$M(a, b, c)$ の和を $S(N)$ とします。

$S(10) = 1\\,972$, $S(10\\,000) = 2\\,024\\,258\\,331\\,114$ であることを確認できます。

次の条件をすべて満たすフィボナッチ数列を $F_k$ とします。

- $F_0 = 0$, $F_1 = 1$
- $k ≥ 2$ のとき、$F_k = F_{k - 1} + F_{k - 2}$

$2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$ のとき、$\sum S(F_k)$ の下位 9 桁を求めなさい。

# --hints--

`integerValuedPolynomials()` は `356019862` を返す必要があります。

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
