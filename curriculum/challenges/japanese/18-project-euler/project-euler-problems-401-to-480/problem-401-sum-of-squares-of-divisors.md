---
id: 5900f4fd1000cf542c51000f
title: '問題 401: 約数の平方和'
challengeType: 1
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

6 の約数は 1, 2, 3, 6 です。

これらの数の平方和は $1 + 4 + 9 + 36 = 50$ です。

$n$ の約数の平方和を $\sigma_2(n)$ で表すことにします。 そうすると、$\sigma_2(6) = 50$ になります。

$\sigma_2$ の総和関数を $\Sigma_2$ で表します。つまり、$\Sigma_2(n) = \sum \sigma_2(i)$ ($i=1$ から $n$ まで) です。 $\Sigma_2$ の最初の 6 つの値は 1, 6, 16, 37, 63, 113 です。

$\Sigma_2({10}^{15})$ mod ${10}^9$ を求めなさい。

# --hints--

`sumOfSquaresDivisors()` は `281632621` を返す必要があります。

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

# --seed--

## --seed-contents--

```js
function sumOfSquaresDivisors() {

  return true;
}

sumOfSquaresDivisors();
```

# --solutions--

```js
// solution required
```
