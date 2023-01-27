---
id: 5900f48d1000cf542c50ff9f
title: '問題 288: 巨大な階乗'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

任意の素数 $p$ に対し、数 $N(p,q)$ は $N(p,q) = \sum_{n=0}^q T_n \times p^n$ と定義されます。$T_n$ は下の乱数生成法で生成されます。

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\ & T_n = S_n\bmod p \end{align}$$

$Nfac(p,q)$ を、$N(p,q)$ の階乗と定義します。

$NF(p,q)$ を、$Nfac(p,q)$ 内の因数 $p$ の数と定義します。

$NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$ が与えられます。

$NF(61,{10}^7)\bmod {61}^{10}$ を求めなさい。

# --hints--

`enormousFactorial()` は `605857431263982000` を返す必要があります。

```js
assert.strictEqual(enormousFactorial(), 605857431263982000);
```

# --seed--

## --seed-contents--

```js
function enormousFactorial() {

  return true;
}

enormousFactorial();
```

# --solutions--

```js
// solution required
```
