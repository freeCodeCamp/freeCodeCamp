---
id: 5900f49d1000cf542c50ffaf
title: '問題 304: 素数フィボナッチ数列 (Primonacci)'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

任意の正の整数 $n$ について、関数 $\text{next_prime}(n)$ は、$p > n$ を満たす最小の素数 $p$ を返します。

数列 $a(n)$ は次のように定義されます: $n > 1$ のとき、$a(1) = \text{next_prime}({10}^{14})$, $a(n) = \text{next_prime}(a(n - 1))$

フィボナッチ数列 $f(n)$ は次のように定義されます: $n > 1$ のとき、$f(0) = 0$, $f(1) = 1$, $f(n) = f(n - 1) + f(n - 2)$

数列 $b(n)$ は $f(a(n))$ と定義されます。

$1 ≤ n ≤ 100\\,000$ のとき、$\sum b(n)$ を求めなさい。 $\bmod 1\\,234\\,567\\,891\\,011$ で答えること。

# --hints--

`primonacci()` は `283988410192` を返す必要があります。

```js
assert.strictEqual(primonacci(), 283988410192);
```

# --seed--

## --seed-contents--

```js
function primonacci() {

  return true;
}

primonacci();
```

# --solutions--

```js
// solution required
```
