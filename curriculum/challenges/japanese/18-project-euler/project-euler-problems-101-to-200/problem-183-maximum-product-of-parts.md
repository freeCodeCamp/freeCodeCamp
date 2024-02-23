---
id: 5900f4231000cf542c50ff36
title: '問題 183: 分割された数の最大積'
challengeType: 1
forumTopicId: 301819
dashedName: problem-183-maximum-product-of-parts
---

# --description--

$N$ を正の整数とし、$N$ を $k$ 個に等分します。$r = \frac{N}{k}$ とすると、$N = r + \cdots + r$ です。

分割された各部の積を $P$ とすると、$P = r × r × \cdots × r = r^k$ となります。

例えば、11 を 5 等分すると 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2 なので、$P = {2.2}^5 = 51.53632$ です。

与えられた任意の値 $N$ について、$M(N) = P_{max}$ と定義します。

$N = 11$ のときの最大値を求めるには 11 を 4 等分し、$P_{max} = {(\frac{11}{4})}^4$ を導きます。つまり、$M(11) = \frac{14641}{256} = 57.9140625$ であり、これは有限小数です。

しかし $N = 8 のときは、最大値を求めるには 3 等分します。$M(8) = \frac{512}{27}$ となり、これは無限小数です。

$M(N) が無限小数であれば $D(N)=N$ とし、$M(N) が有限小数であれば $D(N)=-N とします。

例えば、$5 ≤ N ≤ 100$ のとき、$\sum D(N)$ は 2438 です。

$5 ≤ N ≤ 10000$ のとき、$\sum D(N)$ を求めなさい。

# --hints--

`maximumProductOfParts()` は `48861552` を返す必要があります。

```js
assert.strictEqual(maximumProductOfParts(), 48861552);
```

# --seed--

## --seed-contents--

```js
function maximumProductOfParts() {

  return true;
}

maximumProductOfParts();
```

# --solutions--

```js
// solution required
```
