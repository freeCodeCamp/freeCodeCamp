---
id: 5900f5361000cf542c510048
title: '問題 457: 素数の平方数を法とする多項式'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

$f(n) = n^2 - 3n - 1$ と定義します。

$p$ を素数とします。

$f(n)\bmod p^2 = 0$ が成り立つ最小の正の整数 $n$ が存在するときは $R(p)$ = $n$ とし、存在しないときは $R(p) = 0$ と定義します。

$L$ を超えないすべての素数について、$\sum R(p)$ を $SR(L)$ とします。

$SR({10}^7)$ を求めなさい。

# --hints--

`polynomialModuloSquareOfPrime()` は `2647787126797397000` を返す必要があります。

```js
assert.strictEqual(polynomialModuloSquareOfPrime(), 2647787126797397000);
```

# --seed--

## --seed-contents--

```js
function polynomialModuloSquareOfPrime() {

  return true;
}

polynomialModuloSquareOfPrime();
```

# --solutions--

```js
// solution required
```
