---
id: 5900f5461000cf542c510058
title: '问题473：数字基数'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Let $\varphi$ be the golden ratio: $\varphi = \frac{1+\sqrt{5}}{2}.$

Remarkably it is possible to write every positive integer as a sum of powers of $\varphi$ even if we require that every power of $\varphi$ is used at most once in this sum.

正数整数不超过1000，其数字表示为回文的总和为4345。

找出不超过$ 10 ^ {10} $的正整数之和，其数字表示为回文。

`euler473()`应该返回35856681704365。

$2 = \varphi + \varphi^{-2}$ and $3 = \varphi^{2} + \varphi^{-2}$

To represent this sum of powers of $\varphi$ we use a string of 0's and 1's with a point to indicate where the negative exponents start. 我们将其称为数字数字库中的表示。

So $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ and $14 = 100100.001001_{\varphi}$. The strings representing 1, 2 and 14 in the phigital number base are palindromic, while the string representing 3 is not (the phigital point is not the middle character).

The sum of the positive integers not exceeding 1000 whose phigital representation is palindromic is 4345.

Find the sum of the positive integers not exceeding $10^{10}$ whose phigital representation is palindromic.

# --hints--

`phigitalNumberBase()` should return `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
