---
id: 5900f4291000cf542c50ff3b
title: '問題 188: 数の超累乗'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

数 $a$ を正の整数 $b$ によって超累乗またはテトレーション (tetration) することを $a↑↑b$ または ${}^ba$ と表記し、次のように再帰的に定義します。

$a↑↑1 = a$

$a↑↑(k+1) = a^{(a↑↑k)}$

したがって、例えば、$3↑↑2 = 3^3 = 27$, $3↑↑3 = 3^{27} = 7625597484987$ であり、$3↑↑4$ は大まかに ${10}^{3.6383346400240996 \times {10}^{12}}$ です。 $1777↑↑1855$ の下位 8 桁を求めなさい。

# --hints--

`hyperexponentation()` は `95962097` を返す必要があります。

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
