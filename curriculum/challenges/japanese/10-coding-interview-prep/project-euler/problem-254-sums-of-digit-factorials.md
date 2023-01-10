---
id: 5900f46b1000cf542c50ff7d
title: '問題 254: 各位の階乗の和'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

$f(n)$ を、$n$ の各位の階乗の和と定義します。 例えば、$f(342) = 3! + 4! + 2! = 32$ です。

$sf(n)$ を、$f(n)$ の各位の和と定義します。 したがって、$sf(342) = 3 + 2 = 5$です。

$g(i)$ を、$sf(n) = i$ となる最小の正の整数 $n$ と定義します。 $sf(342)$ は 5 ですが、$sf(25)$ も 5 であり、$g(5)$ は 25 であることを確認できます。

$sg(i)$ を、$g(i)$ の各位の和と定義します。 したがって、$sg(5) = 2 + 5 = 7$ です。

さらに、$g(20)$ は 267 であり、$1 ≤ i ≤ 20$ のときの $\sum sg(i)$ は 156 であることを確認できます。

$1 ≤ n ≤ 150$ のとき、$\sum N(i)$ を求めなさい。

# --hints--

`sumsOfDigitFactorials()` は `8184523820510` を返す必要があります。

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
