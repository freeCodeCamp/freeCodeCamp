---
id: 5900f4531000cf542c50ff66
title: '問題 231: 二項係数の素因数分解'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

二項係数 $\displaystyle\binom{10}{3} = 120$ について考えます。

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$ および $2 + 2 + 2 + 3 + 5 = 14$

したがって、$\displaystyle\binom{10}{3}$ の素因数分解の項の和は $14$ です。

$\binom{20\\,000\\,000}{15\\,000\\,000}$ の素因数分解の項の和を求めなさい。

# --hints--

`primeFactorisation()` は `7526965179680` を返す必要があります。

```js
assert.strictEqual(primeFactorisation(), 7526965179680);
```

# --seed--

## --seed-contents--

```js
function primeFactorisation() {

  return true;
}

primeFactorisation();
```

# --solutions--

```js
// solution required
```
