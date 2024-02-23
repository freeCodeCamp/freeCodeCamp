---
id: 5900f4ed1000cf542c50ffff
title: '問題 383: 階乗間の被整除性比較'
challengeType: 1
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

$5^x$ が $n$ を割り切るような最大の整数 $x$ を $f_5(n)$ とします。

例えば、$f_5(625\\,000) = 7$ となります。

次の条件を満たす整数 $i$ の個数を $T_5(n)$ とします: $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ かつ $1 ≤ i ≤ n$

$T_5({10}^3) = 68$, $T_5({10}^9) = 2\\,408\\,210$ であることを確認できます。

$T_5({10}^{18})$ を求めなさい。

# --hints--

`factorialDivisibilityComparison()` は `22173624649806` を返す必要があります。

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
